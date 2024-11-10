import React from 'react'
import Post from '../../component/ui/post/Post'
import postData from '.././../temp/postData.json'

const Feed = () => {
  return (
    <div>
      {
        postData.map((post, index) => (
          <Post 
            profilePicture={post.profilePicture} 
            userName={post.userName} 
            userDesignation={post.userDesignation}
            post={post.postImage} />

        ))
      }
    </div>
  )
}

export default Feed