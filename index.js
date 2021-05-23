const mysql = require('mysql');
const express = require('express');
let app = express();
const bodyparser = require('body-parser');
var path = require('path');

app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());


let connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: null,
    database: 'db_exam'
});


connection.connect((error) =>{
    if(!error)
    console.log("Connection made.");
    else
    console.log("error: " + JSON.stringify(error,undefined,2));
});

app.set('view engine', 'ejs');

app.listen(3000, () => console.log("Listening @ port 3000"));

// Display Home page
app.get('/', function(request, response) {
	response.sendFile(path.join(__dirname + '/index.html'));
});

//Get all Family
app.get("/Families", (req, res)=>{
    connection.query("select * from familytree;", (err, rows, fields)=>{
        if(!err)
        {
            res.render('Family', {title:'Family member', userData:rows})
            res.end();
        }else{
            console.log(err);
            res.end();
        }
    })
});


//Get Family Info
app.get("/FamiliesInfo/:id", (req, res)=>{
    connection.query("select * from familytree where FamilyID = ?;",[req.params.id], (err, rows, fields)=>{
        if(!err)
        {
            res.render('Info', {title:'Family member', mydata:rows})
            res.end();
        }else{
            console.log(err);
            res.end();
        }
    })
});



//Delete Family
app.get('/Delete/:id', (req, res)=>{
    connection.query("delete from familytree where FamilyID = ?;", [req.params.id],(err, rows, fields)=>{
        if(!err)
        {
            res.send("Family Deleted!<br/><a href = '/Families'>Return to Families</a>");
            res.end();
        }else{
            console.log(err);
            res.end();
        }
    })
});

//Update Info
app.post("/Update", (req, res)=>{
    connection.query("Update familytree set name = ?, relationship = ? where FamilyID = ?;",[req.body.txtName, req.body.cmbRelationship, req.body.id], (err, rows, fields)=>{
        if(!err)
        {
            res.send("Family member is updated! <br><a href = '/Families'>Return to Families</a> ")
            res.end();
        }else{
            console.log(err);
            res.end();
        }
    })
});

//post data
app.post('/Add', (req, res)=>{
    let query = "insert into familytree (name, relationship) values (?,?);";
    connection.query(query, [req.body.txtName, req.body.cmbRelationship],(err, rows, fields)=>{
        if(!err)
        {
            res.send("<h1>family has been entered.</h1><br/><a href = '/'>Return</a>"); 
            res.end();
        }else{
            console.log(err);
            res.end();
        }
    })
});

