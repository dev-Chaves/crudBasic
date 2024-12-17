const tasksModel = require('../models/taskModels');

const getAll = async (req, res) => {

    // console.log('Controller Funcionando!');

    const tasks = await tasksModel.getAll();

    return res.status(200).json(tasks);
};

const createTask = async (req, res) =>{
    // console.log('funfando')

    const createdTask = await tasksModel.addTask(req.body);
    return res.status(201).json(createdTask);
    
};

const deleteTask = async (req, res) =>{

    const {id} = req.params;
    
    await tasksModel.deleteTask(id);
    return res.status(204).json();
};

const uptadeTask = async(req, res) => {

    const {id} = req.params;

    await tasksModel.uptadeTask(id, req.body);
    return res.status(204).json();

};


module.exports = {
    getAll,
    createTask,
    deleteTask,
    uptadeTask
};