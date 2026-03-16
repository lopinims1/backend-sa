const express = require('express')
const router = express.Router()
const musicServices = require('../services/musicServices')

router.get('/', (req, res) => {
    res.json(musicServices.getAll())
})

router.get('/:id', (req, res) => {
    const music = musicServices.getById(req.params.id)
    if (!music) return res.status(404).json({ message: 'Music not found' })
    res.json(music)
})

module.exports = router