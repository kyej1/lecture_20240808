const express = require('express')
const registerUser = require('../controller/registerUser.js')
const checkEmail = require('../controller/checkEmail.js')
const checkPassword = require('../controller/checkPassword.js')

const router = express()

router.get("/register",(req,res)=>{
    res.render("RegisterPage",{})
})

router.post("/register",registerUser)
router.post("/email",checkEmail)
router.post("/password",checkPassword)

module.exports = router
