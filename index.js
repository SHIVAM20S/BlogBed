require('dotenv').config();

const express = require('express');

const mongoose =require('mongoose');

const dbString=process.env.DATABASE_URL;

mongoose.connect(dbString);

const db=mongoose.connection;
db.on('error',(error)=>{(console.log(error))})

db.once('connected',()=>{
    console.log("Database connected by OHCYSP")
})

const routes = require('./routes/routes');

const app =express();

app.use(express.json());
app.use('/backend', routes);
// app.use('/backend', routes);


app.listen(3000, ()=>{
    console.log('server started by SHIVAM')
})