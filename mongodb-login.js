const http = require('http')
const express=require('express')
const app=express()
const path=require('path')
const collection=require('./demo')
const querystring = require('querystring')


var query;

http.createServer(function (req, res) {

    var data1 = '';

    req.on('data', function (chunk) {

        console.log(chunk);

        data1 += chunk;

    });

    req.on('end', async()=> {
        query = querystring.parse(data1);

        console.log(query);
        const data= {
        fname : (query)["fname"],

        lname : (query)["lname"],

        

        password : (query)["password"],

       
}
      await collection.insertMany([data]);

        res.write("You have login the form! ");

        res.end();

    });

}).listen(6542); console.log('Server has Started.......');
