const express = require("express")

const router = express.Router()

const { handleGetAllNotes, handleCreateNotes, HandleGetById, HandleUpdateById, HandleDeleteById } = require('../controller/notes-controller')


router.get('/', handleGetAllNotes)

router.post('/', handleCreateNotes)

router.get('/:id', HandleGetById)

router.patch('/:id', HandleUpdateById)

router.delete('/:id', HandleDeleteById)
