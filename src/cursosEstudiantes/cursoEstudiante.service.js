const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const GetAll = async (req, res ) => {
    let cursoEstudiantes = await prisma.test_courses_x_student.findMany({
        include :{
            test_students : true,
            test_courses: true
        },
    })
    res.send({data : cursoEstudiantes})
}

const GetById =  async (req , res) =>{
    let { id } = req.params
    let cursoEstudiante = await prisma.test_courses_x_student.findUnique({
        where : {
            cxs_id : parseInt(id)
        }
    })
    res.send({data : cursoEstudiante})
}

const GetByIdEstudiante = async (req , res) =>{
    let { id } = req.params
    let cursoEstudiante = await prisma.test_courses_x_student.findMany({
        where: {
            s_id: parseInt(id)
        },
        include:{
            test_students : true,
            test_courses: true
        },  
    })
    let count = cursoEstudiante.length
    res.send({count , data : cursoEstudiante})
}

const Create =  async (req , res) =>{
    let { body } = req
    let cursoEstudiante = await prisma.test_courses_x_student.create({
        data : body
    })
    res.send({data : cursoEstudiante})
}

const Update = async (req , res) =>{
    let { body }= req
    let { id } = req.params
    let cursoEstudiante = await prisma.test_courses_x_student.update({
        where : {
            cxs_id : parseInt(id)
        } , 
        data : body
    })
    res.send({data : cursoEstudiante})
}


const Delete = async (req , res) =>{
    let { id } = req.params
    let curso = await prisma.test_courses_x_student.delete({
        where : {
            cxs_id : parseInt(id)
        }
    })
    res.send({data : curso})
}
module.exports = {  GetAll  , GetById , GetByIdEstudiante ,Create , Update , Delete}