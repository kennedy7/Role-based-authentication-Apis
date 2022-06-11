const express = require('express');
const {projects} = require('../data')
const { authUser } = require('../basicAuth');
const {canViewProject, UserProject} = require('../permissions/project')
const projectRouter = express.Router();


projectRouter.get('/', authUser, (req, res)=>{
    res.json(UserProject(req.user, projects))
})

projectRouter.get('/:projectId', setProject, authUser, authGetProject, (req, res)=>{
    res.json(req.project)
})


function setProject (req, res, next){
    const projectId = parseInt(req.params.projectId)
    req.project = projects.find(project=> project.id === projectId)
 
    if(req.project  == null){
        res.status(404)
        return res.send('project not found')
    } next()

} 
function authGetProject(req, res, next){
    if(!canViewProject(req.user, req.project)){
        res.status(401)
        return res.send('Access denied')
    }
    next()
}


module.exports = {projectRouter}