import React from 'react'
import styles from './CreatePost.module.css'
import PostButton from '../../postButton/PostButton'
import postImage from '../../../assets/svg/postImage.svg'
import postBlog from '../../../assets/svg/postBlog.svg'
import UserProfile from '../../userProfile/UserProfile'

const CreatePost = () => {
  return (
    <div className={styles.createPostContainer}>
      <UserProfile profilePicture={""} userName={"User"} />
        <div className={styles.promptContainer}>
          <p>
            Have something to share?
          </p>
          <div className={styles.postButtonContainer}>
          <PostButton placeHolder={"Post image"} image={postImage}/>
          <PostButton placeHolder={"Post blog"} image={postBlog}/>
        </div>
        </div>


    </div>
  )
}

export default CreatePost