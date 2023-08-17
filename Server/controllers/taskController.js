const User=require("../../Database/model/user.model")
const Task=require("../../Database/model/task.model")


const addTask=async(req,res)=>{
   const {task,id}=req.body

   try {

    if(!task){
        return res.status(400).send("please enter the task")
    }if(task.lengh<10){
        return res.status(400).send("add minimum 10 charecters")
    }
    const taskDetail=await new Task({
        task,
        createdBy:id,
    })

    await taskDetail.save()

    return res.status(200).send("task added successfull")

   } catch (error) {
    
        return res.status(400).send("task addition failed")


   }
}

const getAllTasks=async(req,res)=>{
     
    const {id}=req.query;
    
            try {
                let tasklist=await Task.find({createdBy:id})
                console.log(tasklist);
                return res.status(200).send(tasklist)
                
                
            } catch (error) {
                return res.status(400).send(error)
            }
}

const editTask=async(req,res)=>{

}




module.exports={
    addTask,
    getAllTasks,
    editTask,
}