const express = require('express')
const router = express.Router();
const {ROLE} = require('../data')
const {authUser, authRole} = require ('../basicAuth')

router.get('/', (req, res)=>{
    res.send('Homepage')
})

router.get('/dashboard', authUser, (req, res)=>{
    res.send('User Dashboard')
})
router.get('/admin', authUser, authRole(ROLE.ADMIN), (req, res)=>{
    res.send('Admin page')
})

// function setUser (req, res, next){
//     const userId = req.body.userId;
//     if(userId){
//         req.user =users.find(user=> user.id === userId)
//     }
//     next()

// }

module.exports = {router}