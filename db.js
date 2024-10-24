// const mongoose = require('mongoose');
// const mongoUrl= 'mongodb://127.0.0.1:27017/hotels'
// mongoose.connect(mongoUrl,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
// .then(() => {
//     console.log('Connected to MongoDB');
// })
// .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
// });
// const db = mongoose.connection;

// db.on('error', (error) => {
//     console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

// db.on('disconnected', () => {
//     console.log('Disconnected from MongoDB');
// });

// module.exports=db;
const mongoose=require('mongoose');
const mongodbURL='mongodb://localhost:27017/mydatabase'
mongoose.connect(mongodbURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const db=mongoose.connection;
db.on('connected',()=>{
console.log("connected to db")
})
db.on('error',(err)=>{
    console.error("error to connect to db",err)
    })

db.on('disconnected',()=>{
        console.log("disconnected to db")
        })  
module.exports=db;          