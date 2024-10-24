const express = require('express');
const router = express.Router();
const Menu=require('./../models/menu');
router.post('/menu', async (req,res)=>{
    try{
        const data=req.body;
        const newMenu = new Menu(data);
        const savedMenu= await newMenu.save();
        console.log("dtaamenusave")
        res.status(200).json(savedMenu)

    }catch(err){
        res.status(500).json({error:'inter errror catch'});
        console.log("error catch")

    }
})
router.get('/menu', async (req,res)=>{
    try{
        const data= await Menu.find();
        res.status(200).json(data);
        console.log("dataamenufetch")
    }catch(err){
        res.status(500).json({error:'server error in catch'})
    }
})


router.put('/:id', async (req,res)=>{
    try{
        const personId =res.params.id;
        const updatedId =req.body;
        const response = await Menu.findById(personId,updatedId,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(400).json({error:'person not found'});
        }
        console.log("data updated")
        res.status(200).json(response)

    }catch(err){
        res.status(500).json({error:'internal server error'});

    }

})
router.delete('/:id', async(req,res)=>{
    const data= req.params.id;
    try{
        const response = await Menu.findByIdAndDelete(data);
        if(!response){
            res.status(400).json({error:'person not found'});
        }

        res.status(200).json({message:'person deleted'});

    }catch(err){
        console.log("error");
        res.status(500).json({error:'inter server error'})
    }
     
})
module.exports=router;