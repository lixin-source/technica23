import { useState, useEffect } from 'react';
import '../App.css'
import axios from "axios";

// Display details of the task given by fetching from API
const TaskDetail = ( id ) =>  {
    const [taskDetails, setTaskDetails] = useState({});

    // Fetch the details of the task with the specified task's id
    useEffect(() => {
        async function fetchOneTask() {
            try {
                const { data } = await axios.get(`../../data/Tasks/${id}`);
                setTaskDetails(data);
            } catch (error) {
                console.log("Error fetching one task");
            }
        }
        fetchOneTask();
    }, [id]);

    return (
        <div className="taskdetail-pg">
            <p>Title: {taskDetails.title}</p>
            <img src={taskDetails.image_task} className='taskdetail-img'/>
            <p>Description: {taskDetails.description}</p>
        </div>
    );
};

export default TaskDetail;
