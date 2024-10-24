const express= require('express');
const app=express();
const db = require('./db')
require('dotenv').config();

app.get('/',function(req,res){
    res.send("hello world")
})

const personRouters=require('./routers/PersonRouter');
 const menuItemRouters=require('./routers/menuItemRouter');
 app.use('/',menuItemRouters)
app.use('/',personRouters)

//import person routes

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>{
    console.log("port is listening in 3000");
})