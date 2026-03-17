const express = require('express')
const router = express.Router()
const artistServices = require('../services/artistServices')

router.get('/', (req, res) => {
    res.json(artistServices.getAll()) 
})

router.get('/:id', (req, res) => {
    const artist = artistServices.getById(req.params.id)
    if (!artist) return res.status(404).json({ message: artist.error })
    res.json(artist)
})

router.get('/:id/albuns', (req, res) => {
    const artist = artistServices.getById(req.params.id)
    if (!artist) return res.status(404).json({message: artist.error})
    res.json(artist.albuns)
})

router.get('/:artistId/albuns/:albumId', (req, res) => {
    const tracks = artistServices.getTracks(req.params.artistId, req.params.albumId)
    if (!tracks) return res.status(404).json({message: tracks.error})
        res.json(tracks)
})



module.exports = router