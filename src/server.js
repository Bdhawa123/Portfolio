/* eslint-disable no-new-object */
var express = require('express');
var app = express();
var cors = require('cors');
const fs= require('fs');





app.use(cors());
app.use(express.static('resources'));           //resources folder hosted at port 3002

let json = new Object();

 var server = app.listen(3002, function () {
    var host = server.address().address
    var port = server.address().port
    //const isDirectory = source => lstatSync(source).isDirectory();
    //let source = "resources";
    
    console.log("Projects and images hosted at  http://%s:%s", host, port)
    let source1='res';


    const files = source1 => fs.readdir(source1,(error,files)=>{
        if(!error){
            files.forEach((file)=>{
                console.log(file);
                return file
            })}
        else{
            console.log('smtn not right')
        }
        
    });
    console.log(files);

    let source ='resources/projects';

    const directories = source => fs.readdirSync(source, {
        withFileTypes: true

    }).reduce((a, c) => {
        if (c.isDirectory){
            //json[c.name].push(fs.readdirSync(source+'//'+c.name))
           // json.key = c.name;
            json[c.name]=fs.readdirSync(source+'//'+c.name);

        }
        c.isDirectory() && a.push(c.name)
        console.log('c val:'+c.name);
        console.log(fs.readdirSync(source+'//'+c.name));
        
        return a
    }, [])

    console.log(directories('resources/projects'));
    console.log("Final Json Object");
    console.log(json);

    app.get('/', function (req, res) {
        //res.send('Hello World');
        res.send(json);
        res.writeContinue('hello world');
     })
   

 })
