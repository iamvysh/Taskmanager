const mongoose=require("mongoose")


const MONGOURL="mongodb://127.0.0.1/librarymanagement"


mongoose
        .connect(MONGOURL)
        .then(()=>{
            console.log(" connected to MongoDb");
        })
        .catch((err)=>{
            console.log("error connecting to mongodb",err);
        })