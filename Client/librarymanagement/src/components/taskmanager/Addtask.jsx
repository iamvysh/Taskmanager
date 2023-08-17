import React, { useState } from "react";
import "./addtask.scss"
import { addTask } from "../../redux/taskSlice";
import { useDispatch, useSelector } from "react-redux";




const Addtask = () => {

  const dispatch=useDispatch()
  const {auth}=useSelector((state)=>({...state}))
  const{currentUser}=auth;
  const [state, setState] = useState({
    task: "",
  });
  const handleChange = (e) => {
    e.preventDefault();
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addTask(state.task,currentUser.id))
    setState({
      task:'',
    })
     
  }
  return (
    <div>
      <div className="addtask">
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            name="task"
            placeholder="Add  your task"
            onChange={handleChange}
            value={state.task}
          />
          <button className="button">Add Task</button>
        </form>
      </div>
    </div>
  );
};

export default Addtask;
