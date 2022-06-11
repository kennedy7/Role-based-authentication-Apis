const express = require('express')
const router = express.Router();
const {users} = require('./data')

router.get('/', (req, res)=>{
    res.send('Homepage')
})

router.get('/dashboard', checkAuth, (req, res)=>{
    res.send('User Dashboard')
})
router.get('/admin', checkAuth, (req, res)=>{
    res.send('Admin page')
})

function checkAuth (req, res, next){
    const userId = req.body.userId;
    if(userId){
        req.user=users.find(user=> user.Id === userId)
    }
    next()

}


module.exports = {router, checkAuth}