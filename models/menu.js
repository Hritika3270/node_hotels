const mongoose=require('mongoose');
const menuSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    price:{
        type:Number,
    },
    taste:{
        type:String,
        enum:['sweet','soup','spicy'],
    },
    is_drink:{
        type:Boolean,
        default:false  
    },
    ingredient:{
        type:[String],
        default:[]
    },
    num_sales:{
        type:Number,
        default:0
    },
})
const Menu=mongoose.model('menu',menuSchema);
module.exports=Menu