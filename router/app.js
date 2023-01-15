const express = require('express');
const bodyParser = require('body-parser');

const router = require('./route/route');
const hostName = "localhost";
const port = "8055";

const app = express();
app.use(bodyParser.json());

//cors
app.use((req, res, next) =>{
    res.setHeader('access-control-allow-origin', '*');
    res.setHeader('access-control-allow-methods', 'GET,PUT,POST,PATCH, DELETE');
    res.setHeader('access-control-allow-headers', 'Content-Type, Authorization' );
    next();

})

app.use('/', router);
app.listen(port, hostName, ()=>{
    console.log(`Server running at http://${hostName}:${port}`);
})
