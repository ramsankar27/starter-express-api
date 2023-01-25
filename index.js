// Import
const http = require('http');
const app = require('./app');

// const { loadPlanetData } = require('./models/planets.model');

// Environment variable
const PORT = 8000;


const server = http.createServer(app);


function loadServer() {
    // await loadPlanetData();
    // listening
    server.listen(PORT, () => {
    console.log(`Server listening at ${PORT} ...`);
    })
}


loadServer();
