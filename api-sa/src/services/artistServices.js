import { readArtists, writeArtists } from '../config/db.js'

class ArtistServices {
    async getAll() {
        try {
            const artists = await readArtists()
            return artists
        } catch (error) {
            console.error(error);
        }
    }

    async create(name, genre) {
        try {
            const artists = await readArtists()
            const alreadyExists = artists.some(
                a => a.name.toLowerCase() === name.toLowerCase()
            )
            if (alreadyExists) return { error: 'Artist already exists' }

            const newArtist = {
                id: artists.length > 0 ? artists[artists.length - 1].id + 1 : 1,
                name,
                genre,
                albuns: []
            }
            artists.push(newArtist)
            await writeArtists(artists)
            return newArtist
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id) {
        const artists = await readArtists()
        return artists.find(a => a.id === Number(id))
    }

    getAlbuns = (artistId) => {
        const artist = this.getById(artistId)
        if (!artist) return { error: 'Artist not found' }
        return artist.albuns
    }

    getTracks = (artistId, albumId) => {
        const artist = this.getById(artistId)
        if (!artist) return { error: 'Artist not found' }
        const album = artist.albuns.find(a => a.id === parseInt(albumId))
        if (!album) return { error: 'Album not found' }
        return album.tracks
    }
}

export const artistServices = new ArtistServices()