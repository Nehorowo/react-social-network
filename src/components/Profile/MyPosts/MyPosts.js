import React from 'react'
import cssObject from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
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
          {postsElements}
        </div>
      </div>
    );
}

export default MyPosts