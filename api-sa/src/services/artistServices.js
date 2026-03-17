const artists = require('../data/artists');

const getAll = () => artists

const getById = (id) => artists.find(a => a.id === parseInt(id))

const getAlbuns = (artistId) => {
    const artist = getById(artistId)
    if (!artist) return { error: 'Artist not found' }
    return artist.albuns
}

const getTracks = (artistId, albumId) => {
    const artist = getById(artistId)
    if (!artist) return { error: 'Artist not found' }
    const album = artist.albuns.find(a => a.id === parseInt(albumId))
    if (!album) return { error: 'Album not found' }
        return album.tracks
}

module.exports = {
    getAll,
    getById,
    getAlbuns,
    getTracks
}

