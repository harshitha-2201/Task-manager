import React, { useState, useEffect } from 'react';

const TaskForm = ({ onAddTask, onUpdateTask, editingTask, setEditingTask }) => {
  const [formData, setFormData] = useState({ name: '', description: '' });

  useEffect(() => {
    if (editingTask) {
      setFormData(editingTask);
    } else {
      setFormData({ name: '', description: '' });
    }
  }, [editingTask]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingTask) {
      onUpdateTask(formData);
    } else {
      onAddTask(formData);
    }
    setFormData({ name: '', description: '' });
  };

  const handleCancel = () => {
    setEditingTask(null);
    setFormData({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mb-8 max-w-lg w-full">
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name:</label>
        <input
          type="text"
          name="name"
          placeholder='Name of todo'
          required = 'true'
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Description:</label>
        <input
          type="text"
          name="description"
          placeholder='Description of todo'
          required = 'true'
          value={formData.description}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex items-center space-x-4">
        <button 
          type="submit" 
          className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
        >
          {editingTask ? 'Update Task' : 'Add Task'}
        </button>
        {editingTask && (
          <button 
            type="button" 
            onClick={handleCancel} 
            className="bg-gray-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gray-600"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TaskForm;
