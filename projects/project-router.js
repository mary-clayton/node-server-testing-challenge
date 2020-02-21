const express = require('express')
const router = express.Router()
const Projects = require('./project-model.js');


router.get('/', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to receive projects', err })
    })
})

router.get('/:id', (req, res) => {
    Projects.findById()
    .then(projects => {
        if (projects) {
            res.json(projects)
        } else {
            res.status(400).json({ message: 'Could not find project with given id.'})
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to receive project', err })
    })
})

router.post('/', (req, res) => {
    const projectData = req.body;
  
    Projects.add(projectData)
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project', err });
    });
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updated = req.body;
  
    Projects.findById(id)
    .then(projects => {
      if (projects) {
        Schemes.update(updated, id)
        .then(updatedProject => {
          res.json(updatedProject);
        });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to update project' });
    });
  });
  
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Projects.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find project with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete project' });
    });
  });
  
  module.exports = router;