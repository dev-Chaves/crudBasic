const connection = require('./connection');

const getAll = async () =>{

   const [tasks, buffer] = await connection.execute('SELECT * FROM tasks');

   return tasks;
   
};

const addTask = async (task) =>{

   const query = 'INSERT INTO tasks(title, status, create_at) VALUES (?,?,?)';

   const date = new Date(Date.now()).toUTCString();

   const { title } = task;

   const [result] = await connection.execute(query, [title, 'Pendente', date]);

   return {insertId: result.insertId};

};

const deleteTask = async (id) => {

   const query = 'DELETE FROM tasks WHERE id = ?'

   const {removeTask} = await connection.execute(query, [id] );

   return removeTask;

};

const uptadeTask = async (id, task) => {

   const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';

   const { title, status} = task;

   const {uptadeTask} = await connection.execute(query, [title, status, id]);

   return  uptadeTask;

};

module.exports = {
   getAll,
   addTask,
   deleteTask,
   uptadeTask
}