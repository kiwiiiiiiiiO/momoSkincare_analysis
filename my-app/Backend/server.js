const express = require('express');
const mysql = require('mysql');
const cors = require ('cors');

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'${PASSWORD},
    database:'MomoSkinCare'
})
app.get('/',(req, res) =>{
    return res.json("Fron the bAckend side")
})
app.get('/products',(req, res) =>{
    const sql = "SELECT * from MomoSKinCare.products";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

// skincare - 商品數
app.get('/skincare/products',(req, res) =>{
    const sql = "SELECT class as name, number as size FROM MomoSkinCare.skincare_analysis where type='商品數';";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
// skincare - 銷量
app.get('/skincare/sales',(req, res) =>{
    const sql = "SELECT class as name, number as size FROM MomoSkinCare.skincare_analysis where type='銷量';";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
// skincare - 營收總額
app.get('/skincare/revenue',(req, res) =>{
    const sql = "SELECT class as name, number as size FROM MomoSkinCare.skincare_analysis where type='營收總額';";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
// skincare - 人氣
app.get('/skincare/popularity',(req, res) =>{
    const sql = "SELECT type, class, number FROM MomoSkinCare.skincare_analysis where type='總人氣' ;";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})
// skincare - 留言
app.get('/skincare/reviews',(req, res) =>{
    const sql = "SELECT type, class, number FROM MomoSkinCare.skincare_analysis where type='總留言';";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081,()=>{
    console.log("listening");
})
