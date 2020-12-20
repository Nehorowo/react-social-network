import React from 'react'
import cssObject from './Post.module.css'

const Post = (props) => {
    return (
      <div className={cssObject.post}>
        <img src="https://pbs.twimg.com/profile_images/1058731338600247296/OT7thrkK.jpg" />
        {props.message}
        <div>
            <span>Likes: {props.likesCount}</span>
        </div>
      </div>
    );
}

export default Post