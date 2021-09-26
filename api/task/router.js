const router = require('express').Router();
const db = require('../../data/dbConfig.js');
// const { 
//     checkVinNumberUnique    
// } = require('./tasks-middleware.js')
const Task = require('./model.js');
const { checkTaskPayload } = require('./task-middleware.js');

router.get('/', async (req, res, next) => {
    console.log("in the router get")
    try {
        console.log("in the try router get")
        const tasks = await Task.getAll() 
        console.log("tasks: ", tasks)
        res.status(200).json(tasks)
      } catch (err) {
        next(err)
      }
});

router.post('/', checkTaskPayload, async (req, res, next) => {
  // const projectData = req.resource;
  const taskData = req.body;

  console.log("taskData: ", taskData);
  try {
      console.log("in the try of the post")
      const postedTask = await Task.create(taskData)
      console.log("postedTask: ", postedTask);
      res.status(201).json(postedTask);
    } catch (err) {
      console.log("Error in create: ", err)
      next(err)
    }
});



module.exports = router;