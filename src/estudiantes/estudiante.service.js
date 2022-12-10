const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const GetAll = async (req, res ) => {
    let estudiantes = await prisma.test_students.findMany({
        where :{
            status :{
                equals : true
            }
        }
    })
    res.send({data : estudiantes})
}

const GetById =  async (req , res) =>{
    let { id } = req.params
    let estudiante = await prisma.test_students.findUnique({
        where : {
            s_id : parseInt(id)
        }
    })
    res.send({data : estudiante})
}

const Create =  async (req , res) =>{
    let { body } = req
    let estudiante = await prisma.test_students.create({
        data : body
    })
    res.send({data : estudiante})
}

const Update = async (req , res) =>{
    let { body }= req
    let { id } = req.params
    let estudiante = await prisma.test_students.update({
        where : {
            s_id : parseInt(id)
        } , 
        data : body
    })
    res.send({data : estudiante})
}

const Delete = async (req , res) =>{
    let { id } = req.params
    let estudiante = await prisma.test_students.findUnique({
        where: {
            s_id: parseInt(id)
        }
    })

    estudiante.status = false

    let estudianteUpdate = await prisma.test_students.update({
        where : {
            s_id : parseInt(id)
        },
        data : estudiante
    })
    res.send({data : estudiante})
}

module.exports = {  GetAll  , GetById , Create , Update , Delete}