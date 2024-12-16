const app = require('./app');
require('dotenv').config();
const port = process.env.PORT || 3333;

app.listen(port, (req, res) =>{
    console.log(`Servidor escutando na porta ${port}`);
});