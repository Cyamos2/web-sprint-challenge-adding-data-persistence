// build your `/api/projects` router here
const router = require('express').Router();
const db = require('../../data/dbConfig.js');
const { 
    checkProjectPayload
} = require('./project-middleware.js')
const Project = require('./model.js');

router.get('/', async (req, res, next) => {
    console.log("in the router get")
    try {
        console.log("in the project, router, get")
        const projects = await Project.getAll() 
        console.log("router projects: ", projects)
        res.status(200).json(projects)
      } catch (err) {
        next(err)
      }
}); // returns an array of project objects

router.post('/',   async (req, res, next) => {
    // const projectData = req.resource;
    const projectData = req.body;

    console.log("projectData: ", projectData);
    try {
        const postedProject = await Project.create(projectData)
        console.log("postedProject: ", postedProject);
        res.status(201).json(postedProject);
      } catch (err) {
        console.log("Error in create: ", err)
        next(err)
      }
});

module.exports = router;