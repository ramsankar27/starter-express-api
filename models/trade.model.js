//-----------------------------------------------------------------------
// Imports
//-----------------------------------------------------------------------

const { SmartAPI, WebSocket, WebSocketV2 } = require('smartapi-javascript');
const speakeasy = require('speakeasy');
var axios = require('axios');
const moment = require('moment');

//-----------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------

const secret = 'ZYGZG6LGXBH5HZGU6H6D3OVKWA';
const APIKey = 'pDdLSMEz';
const clientID = 'R52754916';
const pin = '1803';
const totp = speakeasy.totp({ secret, encoding: 'base32' });
const smart_api = new SmartAPI({ api_key: APIKey });
let jwtToken;
let entryCount = 0;
let entry;
let tolrencePercentage = 0.3;
let allTimeHigh;
let allTimeLow;
let scriptStartTime = '09:15:00';
let scriptStopTime = '15:15:00';
let isScriptStopTimeReached = false;
let quantity  = 1;

//-----------------------------------------------------------------------
// Functions
//-----------------------------------------------------------------------

// sync function buy
async function order(entry, symbolName, symbolToken, quantity) {
	let res = await smart_api.placeOrder({
		"variety": "NORMAL",
		"tradingsymbol": symbolName,
		"symboltoken": symbolToken,
		"transactiontype": entry,
		"exchange": "NSE",
		"ordertype": "MARKET",
		"duration": "DAY",
		"producttype": "INTRADAY",
		"quantity": quantity
	})
	if (res.status) return true;
	else return false;
}



// function that run after connect  
async function afterConnect() {
	while (!isScriptStopTimeReached) {
		let responce = await getMarketData(['10794']);
		if (!responce.status) return;

		let data = responce.data.fetched[0];
		let price = data.ltp;
		let high = data.high;
		let low = data.low;
		let open = data.open;
		let preClose = data.close;
		let tolrenceRupee = open * (tolrencePercentage / 100);


		// 1st trade
		if (!entryCount && !entry) {
			if (open >= preClose) {
				let res = await order('BUY', 'CANBK-EQ', '10794', quantity);
				allTimeHigh = high;
				allTimeLow = low;
				if (res) {
					entry = 'BUY';
					entryCount++;
				}
				continue;
			}
			if (open < preClose) {
				let res = await order('SELL', 'CANBK-EQ', '10794', quantity);
				allTimeHigh = high;
				allTimeLow = low;
				if (res) {
					entry = 'SELL';
					entryCount++;
				}
				continue;
			}
		}

		// resting trade 2, 4, 6, ...
		if (entryCount % 2 === 1) {
			if (entry === 'BUY' && ((high - price) > tolrenceRupee)) {
				let res = await order('SELL', 'CANBK-EQ', '10794', quantity);
				if (res) {
					entry = 'SELL';
					entryCount++;
				}
				continue;
			}

			if (entry === 'SELL' && ((price - low) > tolrenceRupee)) {
				let res = await order('BUY', 'CANBK-EQ', '10794', quantity);
				if (res) {
					entry = 'BUY';
					entryCount++;
				}
				console.log(entry, entryCount);
				continue;
			}
		}

		// resting trade 3, 5, 7, ...
		if (entryCount % 2 === 0) {
			if (entry === 'BUY' && (allTimeLow > price)) {
				let res = await order('SELL', 'CANBK-EQ', '10794', quantity);
				if (res) {
					entry = 'SELL';
					entryCount++;
				}
				continue;
			}

			if (entry === 'SELL' && (allTimeHigh < price)) {
				let res = await order('BUY', 'CANBK-EQ', '10794', quantity);
				if (res) {
					entry = 'BUY';
					entryCount++;
				}
				continue;
			}
		}
	}

	// exit
	if(entry=== 'BUY') await order('BUY', 'CANBK-EQ', '10794', quantity);
	if(entry=== 'SELL') await order('SELL', 'CANBK-EQ', '10794', quantity);
}


// connect feed api
async function getMarketData(companyCode) {
	let canaraBank = JSON.stringify({
		"mode": "OHLC",
		"exchangeTokens": {
			"NSE": companyCode
		}
	});

	let config = {
		method: 'post',
		url: 'https://apiconnect.angelbroking.com/rest/secure/angelbroking/market/v1/quote/',
		headers: {
			'X-PrivateKey': APIKey,
			'Accept': 'application/json, application/json',
			'X-SourceID': 'WEB, WEB',
			'X-ClientLocalIP': smart_api.local_ip,
			'X-ClientPublicIP': smart_api.public_ip,
			'X-MACAddress': smart_api.mac_addr,
			'X-UserType': 'USER',
			'Authorization': 'Bearer ' + jwtToken,
			'Content-Type': 'application/json'
		},
		data: canaraBank
	};

	const responce = await axios(config);
	return responce.data;

}


async function startTrade() {
    console.log('start');
	// login to smart api
    console.log(clientID, pin, totp);

    try {
        
        let res = await smart_api.generateSession(clientID, pin, totp);
    } catch (error) {
        console.log(error);
    }
	
    
    console.log(res);
    // .then((data) => {
    //     // if conection success
    //     if (data.status) {
    //         console.log('loged in');
    //         jwtToken = data.data.jwtToken;
    //         afterConnect();
    //     }
    // })
    // .catch((ex) => {
    //     console.log(ex);
    // });
		
}


//-----------------------------------------------------------------------
// Constants
//-----------------------------------------------------------------------


function main() {
    startTrade();
}

module.exports = {
    main
}
