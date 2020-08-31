const express = require('express');

const app = express();
const port = 8080;


// index path
app.get('/', function(req, res){
    console.log('app listening on port: '+ port);
    res.send('test express nodejs sqlite')
});



app.listen(port, function(){
    console.log('app listening on port: '+port);
});

module.exports = app;