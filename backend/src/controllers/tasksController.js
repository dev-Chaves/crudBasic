const tasksModel = require('../models/taskModels');

const getAll = async (req, res) => {

    console.log('Controller Funcionando!')

    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks);
};

const createTask = async (req, res) =>{
    // console.log('funfando')

    const createdTask = await tasksModel.addTask(req.body);
    return res.status(201).json(createdTask);
    
};


module.exports = {
    getAll,
    createTask
};