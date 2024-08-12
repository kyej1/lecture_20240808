const  getUserDetailsFromToken = require('../helpers/getUserDetailsFromToken')
const UserModel = require('../models/UserModel')

async function updateUserDetails(req, res) {
    try{
        const token = req.cookies.token || ""
        const user = await getUserDetailsFromToken(token)
        const {name, profile_pic} = req.body
        const updateUser = await UserModel.updateOne({_id: user._id},{
            name,
            profile_pic
        })
        const userInformation = await UserModel.findById(user._id)
        return res.status(200).json({
            message: "사용자정보를 수정했습니다.",
            data: userInformation,
            success: true
        })
    }catch(error){
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }


}


module.exports = updateUserDetails