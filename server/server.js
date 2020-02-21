const express = require('express');
const server = express();

const projectRouter = require('../projects/project-router.js')

server.use(express.json());

server.use('/projects', projectRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up' })
})

module.exports = server;