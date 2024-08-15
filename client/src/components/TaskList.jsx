import React from 'react';

const TaskList = ({ tasks, onEditTask, onDeleteTask }) => {
  console.log('Tasks in TaskList:', tasks); // Log tasks prop

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <div key={task._id} className="border-b border-gray-200 p-4 mb-4 rounded-lg flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{task.name}</h2>
              <p className="text-gray-600">{task.description}</p>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={() => onEditTask(task)} 
                className="bg-yellow-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-600"
              >
                Edit
              </button>
              <button 
                onClick={() => onDeleteTask(task._id)} 
                className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No tasks available.</p>
      )}
    </div>
  );
};

export default TaskList;
