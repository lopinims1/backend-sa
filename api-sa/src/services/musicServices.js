const musics = require('../data/musics')

const getAll = () => musics

const getById = (id) => musics.find(m => m.id === parseInt(id))

module.exports = { getAll, getById }