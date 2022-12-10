const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const GetAll = async (req, res ) => {
    let cursos = await prisma.test_courses.findMany()
    res.send({data : cursos})
}

const GetById =  async (req , res) =>{
    let { id } = req.params
    let curso = await prisma.test_courses.findUnique({
        where : {
            c_id : parseInt(id)
        }
    })
    res.send({data : curso})
}

const Create =  async (req , res) =>{
    let { body } = req
    delete body.c_id
    let curso = await prisma.test_courses.create({
        data : body
    })
    res.send({data : curso})
}

const Update = async (req , res) =>{
    let { body }= req
    let { id } = req.params
    let curso = await prisma.test_courses.update({
        where : {
            c_id : parseInt(id)
        } , 
        data : body
    })
    res.send({data : curso})
}

const Delete = async (req , res) =>{
    let { id } = req.params
    let curso = await prisma.test_courses.delete({
        where : {
            c_id : parseInt(id)
        }
    })
    res.send({data : curso})
}

module.exports = {  GetAll  , GetById , Create , Update , Delete}