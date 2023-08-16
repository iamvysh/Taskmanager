import React from "react";
import "./taskmanager.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Addtask from "../../components/taskmanager/Addtask";
import Tasklist from "../../components/taskmanager/Tasklist";
const Taskmanager = () => {
  return (
    <div>
      <div className="taskmanager">
        <div className="taskmanager__left">
          <Sidebar />
        </div>
        <div className="taskmanager__right">
          <div className="taskmanager__addtask">
            <Addtask />
          </div>
          <div className="taskmanager__tasklist">
            <Tasklist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskmanager;
