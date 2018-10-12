require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();

const {
    CONNECTION_STRING,
    SERVER_PORT
} = process.env

massive(CONNECTION_STRING).then(db=> app.set('db',db))

app.use(bodyParser.json());

app.post(`/register`,(req,res)=>{
    const {username,password} = req.body
    const db = req.app.get('db')
    db.add_client([username,password])
    .then(clients=>res.send(clients[0]))
    .catch(err=>{res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(err)
})})
app.post(`/login`,(req,res)=>{
    const {username,password} = req.body
    const db = req.app.get('db')
    db.get_client([username,password])
    .then(client=>res.send(client))
    .catch(err=>{res.status(500).send({errorMessage: 'Something went wrong'})
    console.log(err)
})})


Port = SERVER_PORT;
app.listen(Port,()=>console.log(`Up and running on port: ${Port}`));