const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'aa910828',
    database:'MomoSkinCare'
})
// Mysql@localhost:3306
app.get('/',(req, res) =>{
    return res.json("fron the bAckend side")
})
app.get('/products',(req, res) =>{
    const sql = "SELECT * from MomoSKinCare.products";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
})