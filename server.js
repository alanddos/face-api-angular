var express = require("express");
var path = require('path')
var app = express();
app.use(express.static(__dirname + "/dist/face-api")); //aqui você define onde está o index.html da sua aplicação.
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/face-api/index.html'))
})
app.listen(process.env.PORT || 3000);