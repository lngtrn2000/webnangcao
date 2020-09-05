const http = require('http')
const hostname = 'localhost'
const port = 3000

function xuly(req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end(`
        <html>
            <head>
                <title>Website ket ban</title>
            </head>
            <body>
                Website mai mot, ket duyen to hong
            </body>
        </html>
    `)
}

function thongbao() {
    console.log(`Server dang chay tai http://${hostname}:${port}/`);
}

http.createServer(xuly).listen(port, hostname, thongbao)