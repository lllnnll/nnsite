const express = require('express')
const http = require('http');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/static'));

app.get('/', (req, res) => {
    const file = fs.readFileSync('./view/index.html', {encoding: 'utf8'});

    return res.status(200).send(file);
});

const server = http.createServer(app);
server.listen(port, '0.0.0.0');
server.on('listening', () => console.log(`🚀 Server listening at http://localhost:${port}`));










