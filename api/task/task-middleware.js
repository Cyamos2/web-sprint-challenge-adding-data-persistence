const Project = require('./model');



const checkTaskPayload = async (req, res, next) => {
    const { task_notes, task_description, task_completed, project_id } = req.body;
  
    console.log("req.body:", req.body)
  
    if (typeof task_description === "undefined") {
        res.status(400).json({ message: "the task description is missing"})

    }  else if (typeof project_id === "undefined") {
        res.status(400).json({ message: "the project id is missing"})

    } else {
        next();
    }
        console.log("Done with task payload validation")
  }

module.exports = {
    checkTaskPayload
}