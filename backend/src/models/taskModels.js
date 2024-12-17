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

// const deleteTask = async (task) => {

//    const {id} = task;


// };

module.exports = {
   getAll,
   addTask 
}