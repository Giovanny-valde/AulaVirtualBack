const express = require('express');
const app = express();
const router = express.Router(); 
const cors = require('cors'); 

app.use(cors());
app.use(express.json())

app.use(`/cursos`, require(`./cursos`));
app.use(`/estudiantes`, require(`./estudiantes`));
app.use(`/cursosEstudiantes`, require(`./cursosEstudiantes`));


app.listen(3000, () => {
    console.log('Server is running on port  3000');
})