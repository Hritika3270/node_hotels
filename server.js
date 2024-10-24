const express= require('express');
const app=express();
const db = require('./db')

app.get('/',function(req,res){
    res.send("hello world")
})

const personRouters=require('./routers/PersonRouter');
 const menuItemRouters=require('./routers/menuItemRouter');
 app.use('/',menuItemRouters)
app.use('/',personRouters)

//import person routes



app.listen(8080,()=>{
    console.log("port is listening in 3000");
})