import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('No token found');
        return;
      }
  
      const response = await axios.get('http://localhost:3001/api/tasks', {
        headers: { Authorization: `Bearer ${token}` }
      });
      console.log('Fetched tasks:', response.data); 
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleAddTask = async (newTask) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('No token found');
        return;
      }

      await axios.post('http://localhost:3001/api/add', newTask, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleUpdateTask = async (updatedTask) => {
    try {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No token found');
            return;
        }

        await axios.patch(`http://localhost:3001/api/update/${updatedTask._id}`, updatedTask, {
            headers: { Authorization: `Bearer ${token}` }
        });

        setEditingTask(null);
        fetchTasks();
    } catch (error) {
        console.error('Error updating task:', error.response ? error.response.data : error.message);
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        console.error('No token found');
        return;
      }
  
      await axios.delete(`http://localhost:3001/api/delete/${taskId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };


  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Todo List</h1>
      <TaskForm 
        onAddTask={handleAddTask} 
        onUpdateTask={handleUpdateTask} 
        editingTask={editingTask}
        setEditingTask={setEditingTask}
      />
      <TaskList 
        tasks={tasks} 
        onEditTask={setEditingTask} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default Dashboard;
