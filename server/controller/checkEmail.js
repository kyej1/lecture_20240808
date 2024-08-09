const UserModel = require('../models/UserModel')

const checkEmail = async (req,res) => {
    try {
        const { email } = req.body
        const checkEmail = await UserModel.findOne({email})
        if (!checkEmail){ //회원을 못찾았을때
            return res.status(400).json({
                message: '존재하지 않은 회원입니다.',
                error: true
            })
        }
        return res.status(200).json({
            message: '환영합니다.',
            success: true,
            data: checkEmail
        })
    } catch(error){
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}

module.exports = checkEmail
