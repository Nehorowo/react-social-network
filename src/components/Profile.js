import React from 'react'
import cssObject from './Profile.module.css'

const Profile = () => {
    return (
        <div className={cssObject.content}>
        <div>
          desc
        </div>
        <div>
          post
          <div>
            new post
          </div>
        </div>
        <div>
          post1
        </div>
        <div>
          post2
        </div>
      </div>
    )
}

export default Profile