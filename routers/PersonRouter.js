const express = require('express');
const router = express.Router();
const Person =require('./../models/person')
router.post('/person', async (req,res)=>{
    console.log("person")
    try{
     const data=req.body
     const newPerson= new Person(data);
     const savedPerson=  await newPerson.save();
     console.log("datasaved");
     res.status(200).json(savedPerson);

    }catch(err){
     res.status(500).json({error:'internal server errror'});
     console.log("error")
    }
})
router.get('/person', async (req,res)=>{
    try{
        const data= await Person.find();
        console.log("datafetch");
        res.status(200).json(data);

    }catch(err){
        res.status(500).json({error:'internal server errror'});
        console.log("error")
    }

})
//parameterized get call
router.get('/person/:workType', async(req,res)=>{
    try{
        const workType=req.params.workType;
        if(workType =='chef' || workType =='manager' || workType =='waiter' ){
            const response= await Person.find({work:workType});
            console.log("fetched worktype",response);
            res.status(200).json(response);

        }else{
            res.status(400).json({error:'invalid worktype'})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({error:'Interserver error'})

    }

})
module.exports=router;