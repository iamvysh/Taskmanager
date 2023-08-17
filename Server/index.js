const express=require('express')
const app=express()
const port=3000
require("../Database/db")
const cors=require('cors')
const morgan=require('morgan')
const authRoutes=require("./routes/authRoute")
const taskRoutes=require("./routes/taskRoute")

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }));



app.use('/auth',authRoutes)

// localhost:3000/auth/register

app.use("/task",taskRoutes)



app.listen(port,()=>{
    console.log(`server listening on ${port}`);
}
)