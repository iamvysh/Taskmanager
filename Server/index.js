const express=require('express')
const app=express()
const port=3000
require("../Database/db")



app.listen(port,()=>{
    console.log(`server listening on ${port}`);
}
)