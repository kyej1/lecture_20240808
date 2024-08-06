import React from 'react'

const Avatar = ({userId,name,imageUrl,width,height}) => {
  let avatarName = ""
  if (name) {
    const splitName = name?.split(" ")
    if (splitName.length > 1){
      avatarName = splitName[0][0] + splitName[1][0]
    }else{
      avatarName = splitName[0][0]
    }
  }

  return (
    <div
      className={`text-slate-800 rounded-full font-bold relative`}
      style={{width:width+"px", height:height+"px"}}>
        <div 
          style={{width:width+"px", height:height+"px"}}
          className={`overflow-hidden rounded-full flex justify-center items-center text-lg bg-yellow-200`}
        >
          {avatarName}
        </div>
    </div>
  )
}

export default Avatar