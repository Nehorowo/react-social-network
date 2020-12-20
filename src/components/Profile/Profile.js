import React from 'react'
import cssObject from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={cssObject.content}>
        <div>
          Current status
        </div>
        <MyPosts/>
      </div>
    )
}

export default Profile