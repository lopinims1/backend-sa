import express from 'express'
const route = express.Router()
import { artistServices } from '../services/artistServices.js'

route.get('/', (req, res) => {
    res.json(artistServices.getAll())
});

route.get('/:id', (req, res) => {
    const artist = artistServices.getById(req.params.id)

    if (!artist) {
        return res.status(404).json({ message: artist.error })
    }
    res.json(artist)
});

route.get('/:id/albuns', (req, res) => {
    const artist = artistServices.getById(req.params.id)

    if (!artist) {
        return res.status(404).json({ message: artist.error })
    }
    res.json(artist.albuns)
});

route.get('/:artistId/albuns/:albumId', (req, res) => {
    const tracks = artistServices.getTracks(req.params.artistId, req.params.albumId)

    if (!tracks) {
        return res.status(404).json({ message: tracks.error })
    }
    res.json(tracks)
});



export default route;