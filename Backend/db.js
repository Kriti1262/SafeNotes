const mongoose=require ('mongoose');
const mongoURI="mongodb+srv://notess:1234@cluster0.0wpci1r.mongodb.net/?retryWrites=true&w=majority"
//const mongoURI ="mongodb://localhost:27017/";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected to mongo successfully")
    }) 
}
module.exports=connectToMongo;