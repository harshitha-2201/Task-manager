const Task = require('../models/user'); // Ensure the model path is correct


//Add the task
const addTask = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newTask = new Task({ name, description, user: req.user.userId });
    await newTask.save();
    res.status(201).send('Task added successfully');
  } catch (err) {
    console.log('Error adding task:', err);
    res.status(500).send('Error adding a task');
  }
};

//Update the task
const updateTask = async (req, res) => {
  const { id } = req.params; 
  const { name, description } = req.body;

  try {
      const task = await Task.findById(id); 
      if (!task) return res.status(404).send('Task not found'); 

      if (name !== undefined) task.name = name;
      if (description !== undefined) task.description = description;

      const updatedTask = await task.save(); 
      res.status(200).json(updatedTask); 
  } catch (err) {
      console.log(err); 
      res.status(500).send('Error updating the task'); 
  }
};


// delete the task
const deleteTask = async (req, res) => {
  const { id } = req.params; // Extract id from req.params

  try {
    // Use id as the filter to find and delete the task
    const task = await Task.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).send('Task not found or you do not have permission to delete this task');
    }

    res.status(200).send('Task deleted successfully');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error deleting the task');
  }
};



//get all Tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error retrieving tasks');
  }
};

module.exports = { addTask, updateTask, deleteTask, getAllTasks };
