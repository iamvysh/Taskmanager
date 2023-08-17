import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getAllTasks } from '../../redux/taskSlice'
import Listcard from './Listcard'
import "./tasklist.scss"

const Tasklist = () => {

  const auth=useSelector((state)=>state.auth)
  const tasks=useSelector((state)=>state.task)

  console.log(tasks);

  const {currentUser}=auth; 
  const {AllTask}=tasks;

  

  
    const dispatch=useDispatch()
      useEffect(()=>{
        dispatch(getAllTasks(currentUser.token,currentUser.id))
      },[dispatch,currentUser.token,currentUser.id])

  return (
    <div>
      <ul className='list-header'>
                <li><h5>Id</h5>
                </li>
                <li><h5>Issue name</h5></li>

                <li> <h5>Status</h5></li>

                <li> <h5>Action</h5></li>  





            </ul>

        {
  Object.values(AllTask).map(item => {
    console.log("Task item:", item); // Add this line
    return <Listcard   key={item._id}  item={item} />
  })
}

  </div>

  )
}

export default Tasklist