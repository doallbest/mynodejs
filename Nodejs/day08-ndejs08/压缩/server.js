const express = require('express');
const app = express();
const path = require('path')
const fs = require('fs');
const zlib = require('zlib');

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, './index.html');
    const rs = fs.createReadStream(filePath);

    // console.log(req.headers['accept-encoding']);
    const acceptEncoding = req.headers['accept-encoding'];
    if (acceptEncoding.includes('gzip')) {
        const zlibFile = rs.pipe(zlib.createGzip())
        res.set('Content-Encoding', 'gzip');
        return zlibFile.pipe(res);
    }

    if (acceptEncoding.includes('deflate')) {
        const zlibFile = rs.pipe(zlib.createDeflate());
        res.set('Content-Encoding', 'deflate');
        return zlibFile.pipe(res);
    }

    if (acceptEncoding.includes('br')) {
        const zlibFile = rs.pipe(zlib.createBrotliCompress());
        res.set('Content-Encoding', 'deflate');
        return zlibFile.pipe(res);
    }

    rs.pipe(res);
})





app.listen('3000', (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log('服务器启动成功http://127.0.0.1:3000');
})