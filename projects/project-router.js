const express = require('express')
const router = express().router
const Projects = require('./projects/project-model.js');


router.get('/projects', (req, res) => {
    Projects.find()
    .then(projects => {
        res.json(projects)
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to receive projects', err })
    })
})

router.get('/projects/:id', (req, res) => {
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

router.post('/projects', (req, res) => {
    const projectData = req.body;
  
    Projects.add(projectData)
    .then(projects => {
      res.status(201).json(projects);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project', err });
    });
  });

  router.put('projects/:id', (req, res) => {
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
  
  router.delete('projects/:id', (req, res) => {
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