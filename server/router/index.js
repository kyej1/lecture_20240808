const express = require('express')
const registerUser = require('../controller/registerUser.js')

const router = express()

router.get("/register",(req,res)=>{
    res.render("RegisterPage",{})
})

router.post("/register",registerUser)

module.exports = router
