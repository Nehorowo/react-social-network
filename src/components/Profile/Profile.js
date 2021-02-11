import React from 'react'
import cssObject from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = (props) => {
    return (
        <div className={cssObject.content}>
        <div>
          Current status
        </div>
        <MyPosts posts={props.posts}/>
      </div>
    )
}

export default Profile