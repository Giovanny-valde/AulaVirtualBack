const express = require('express');
const router = express.Router();
const { GetAll , GetById , Create , Update, Delete} = require("./estudiante.service")

router.get("/", GetAll )

router.get("/:id", GetById)

router.post("/", Create )

router.put("/:id",Update )

router.delete("/:id", Delete)

module.exports = router;