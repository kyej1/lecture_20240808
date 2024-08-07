const UserModel = require('../models/UserModel')

const checkEmail = async (req,res) => {
    try {
        const { email } = req.body
        const checkEmail = await UserModel.findOne({email})
        if (!checkEmail){ //회원을 못찾았을때
            return res.status(400).json({
                message: '헉, 너 누구야? 못찾겠거든... 너 해커야?',
                error: true
            })
        }
        return res.status(200).json({
            message: '웰컴 웰컴 너 우리 회원이야... 이제 비번을 보내봐....',
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
