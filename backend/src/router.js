const express = require('express');
const router = express.Router();
const tasksController = require('./controllers/tasksController');
const taskMiddleware = require('./middlewares/tasksMiddlewares');

router.get('/tasks', tasksController.getAll);

router.post('/tasks',taskMiddleware.validateFieldStatus, tasksController.createTask);

router.delete('/tasks/:id', tasksController.deleteTask);

router.put('/tasks/:id', 
    taskMiddleware.validateFieldTitle,
    taskMiddleware.validateFieldStatus,
    tasksController.uptadeTask);

module.exports = router;