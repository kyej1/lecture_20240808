const UserModel = require("../models/UserModel.js")

async function registerUser(req,res){
    const {name,email,password,profile_pic} = req.body
    console.log(`email:${email}`)

    const checkEmail = await UserModel.findOne({email})
    console.log(`checkEmail:${checkEmail}`)
    
    if (checkEmail){
        return res.status(400).json({
            message: "헉, 있는 사용자거든. 넌 이걸 사용할 수없어. 승질나게 하지마."
        })
    }

    const payload = {
        name,
        email,
        password,
        profile_pic
    }
    const user = new UserModel(payload)
    const userSave = await user.save()

    return res.status(201).json({
        message: "와우, 신규회원등록이 성공했습니다. 추카추카"
    })
}

module.exports = registerUser
