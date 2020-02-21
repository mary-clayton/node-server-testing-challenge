const db = require('../data/dbconfig.js')

module.exports = {
    find,
    findById,
    add,
    update,
    remove
}

function find() {
    return db('projects');
}

function findById(id) {
return db('projects').where({ id }).first();
}

function add(projectData) {
    return db('projects').insert(projectData)
}

function update(updated, id) {
return db('projects').where({ id }).update(updated)
}

function remove(id) {
    return db('projects').where( { id }).del()
}