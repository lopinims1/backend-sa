import express from 'express'
const route = express.Router()
import { artistServices } from '../services/artistServices.js'

route.get('/', async (req, res) => {
    const artists = await artistServices.getAll()
    res.json(artists)
});

route.post('/', async (req, res) => {
    const { name, genre } = req.body
    const result = await artistServices.create(name, genre)
    if (result.error) return res.status(400).json(result)
    res.status(201).json(result)
});

route.get('/:id', async (req, res) => {
    const artist = await artistServices.getById(req.params.id)
    if (!artist) return res.status(404).json({ message: 'Artist not found' })
    res.json(artist)
});

route.get('/:id/albuns', async (req, res) => {
    const artist = await artistServices.getById(req.params.id)
    if (!artist) return res.status(404).json({ message: 'Artist not found' })
    res.json(artist.albuns)
});

route.get('/:artistId/albuns/:albumId', async (req, res) => {
    const tracks = artistServices.getTracks(req.params.artistId, req.params.albumId)
    if (tracks?.error) return res.status(404).json(tracks)
    res.json(tracks)
});

export default route;