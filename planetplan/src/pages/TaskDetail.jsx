import React, { useState, useEffect } from 'react';
import '../App.css';
import tasksData from "../data/Tasks";
import { useParams } from 'react-router-dom';

const TaskDetail = () => {
    const { id } = useParams();
    const [taskDetails, setTaskDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Find the task with the matching id in tasksData
                const task = tasksData.find(task => task.id === parseInt(id));

                if (task) {
                    setTaskDetails(task);
                } else {
                    console.error(`Task with id ${id} not found.`);
                }
            } catch (error) {
                console.error('Error fetching item:', error);
            }
        };
        fetchData();
    }, [id]);

    return (
        <div className="taskdetail-pg">
            <p>Title: {taskDetails.title}</p>
            <img src={taskDetails.image_task} className='taskdetail-img' alt={taskDetails.title} />
            <p>Description: {taskDetails.description}</p>
        </div>
    );
};

export default TaskDetail;
