import React from 'react'
import cssObject from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
      <div>
        <div className={cssObject.posts}>
          <div>
            <textarea></textarea>
            <div>
              <button>Add text</button>
              <button>Remove text</button>
            </div>
          </div>

          <Post message='How are you?' likesCount='0'/>
          <Post message='Whats up?' likesCount='11'/>
          <Post message='Im fine bruh' likesCount='16'/>
        </div>
      </div>
    );
}

export default MyPosts