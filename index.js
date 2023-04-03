
    var http = require('http');
    const express = require('express');
    const app = express();
    const path = require('path');
    var fs = require('fs');
    const PORT = process.env.PORT || 3020;
    app.use(express.urlencoded({ extended: true }));
    

    app.use('/css',express.static(path.join(__dirname,'node_modules/bootstrap/dist/css')));
    app.use('/js',express.static(path.join(__dirname,'node_modules/bootstrap/dist/js')));
    app.use(express.static(__dirname+'/photos'));
  app.get('/', function(req, res) {
    fs.readFile("front.html", function (error, pgResp){
        
        if (error) {
            res.writeHead(404);
            res.write('Contents you are looking are Not Found');
        } else {
            res.write(pgResp);
            res.end();
        }
    });
});
http.createServer(app).listen(PORT);
