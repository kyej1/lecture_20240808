const express = require('express')
const registerUser = require('../controller/registerUser.js')

const router = express()

router.get("/register",(req,res)=>{
    // res.sendFile('../../client/src/pages/RegisterPage.js')
    res.render("RegisterPage",{})
})

router.post("/register",registerUser)

module.exports = router
