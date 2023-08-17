const express=require('express')
const router=express.Router()

const taskController=require("../controllers/taskController")



router.route('/add').post(taskController.addTask)
router.route('/tasks').get(taskController.getAllTasks)
router.route('/edit/:id').put(taskController.editTask)


module.exports=router