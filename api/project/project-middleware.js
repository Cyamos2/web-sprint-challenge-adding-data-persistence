const Project = require('./model');



const checkProjectPayload = async (req, res, next) => {
    const { project_name, project_description, project_completed } = req.body;
  
    console.log("req.body:", req.body)
  
    if (typeof project_name === "undefined") {
      res.status(400).json({ message: "the project name is missing"})
    
    } else if (typeof project_description === "undefined") {
      res.status(400).json({ message: "the project description is missing"})
  
    } else if (typeof project_completed === "undefined") {
      res.status(400).json({ message: "is the project completed is missing"})
    } else {
       next();
    }
    console.log("Done with project payload validation")
    next()
  }

module.exports = {
    checkProjectPayload
}
