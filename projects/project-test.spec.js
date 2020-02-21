const Projects = require('./project-model.js')

describe('Project model', () => {
    describe('insert', () => {
            test('inserts new data', () => {
                return Projects.add({ project_name: "AI Crypto App", description: "AI trading app", completed: 0 })
        })
    })
       
})