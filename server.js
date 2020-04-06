const http = require("http");
const app = require("./src/main/express");
const server = http.createServer(app);


server.listen(3333, () => {
    console.log('server up...')
})