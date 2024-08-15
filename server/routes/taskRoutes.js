const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/middleware'); 
const  { addTask, updateTask, deleteTask, getAllTasks }   = require('../controllers/userControllers');

// Adding a task route
router.post('/add', authMiddleware, addTask);
router.patch('/update/:id', authMiddleware, updateTask);
router.delete('/delete/:id', authMiddleware, deleteTask);
router.get('/tasks', authMiddleware, getAllTasks);


module.exports = router;
