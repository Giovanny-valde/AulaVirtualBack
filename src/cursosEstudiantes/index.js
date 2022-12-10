const express = require('express');
const router = express.Router();
const { GetAll , GetById , GetByIdEstudiante , Create , Update, Delete} = require("./cursoEstudiante.service")

router.get("/", GetAll )

router.get("/:id", GetById)

router.get("/byIdEstudiante/:id", GetByIdEstudiante )

router.post("/", Create )

router.put("/:id",Update )

router.delete("/:id", Delete)



module.exports = router;