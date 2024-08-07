const UserModel = require('../models/UserModel')
const bcryptjs = require('bcryptjs')

const checkPassword = async (req,res) => {
    try {
        const {password, userId} = req.body
        const user = await UserModel.findById(userId)
        const verifyPassword = await bcryptjs.compare(password, user.password)
        if(!verifyPassword){ //비번이 틀리면
            return res.status(400).json({
                message: '비밀번호 똑바로 안쳐?',
                error: true
            })
        }
        return res.status(200).json({
            message: '로그인 성공. 이제 대화하러 가자',
            success: true
        })
    }catch(error){
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = checkPassword