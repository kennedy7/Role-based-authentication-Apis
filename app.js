const express = require('express')
const app = express()
const port = process.env.PORT || 7000
const { users } = require('./data')
const { router }= require ('./routes/userRoute')
const { projectRouter }= require ('./routes/projectRoute')


app.use(express.json())

app.use(setUser)
app.use(router)

function setUser (req, res, next){
    const userId = req.body.userId
    if(userId){
        req.user =users.find(user=> user.id === userId)
    }
    next()

}


app.use('/projects', projectRouter)


app.listen(port, ()=>{
    console.log(`app running on port ${port}`)
})