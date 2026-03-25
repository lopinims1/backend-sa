import artists from '../data/artists.js'

class ArtistServices {
    getAll() {
        return artists
    }

    getById(id) {
      return artists.find((artist) => artist.id === parseInt(id))  
    } 

    
    // Corrigir depois
    getAlbuns = (artistId) => {
        const artist = getById(artistId)
        if (!artist) return { error: 'Artist not found' }
        return artist.albuns
    }

    getTracks = (artistId, albumId) => {
        const artist = getById(artistId)
        if (!artist) return { error: 'Artist not found' }

        const album = artist.albuns.find(a => a.id === parseInt(albumId))

        if (!album) return { error: 'Album not found' }
        return album.tracks
    }

}

export const artistServices = new ArtistServices()
