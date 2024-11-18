import React from 'react'
import styles from './Post.module.css'
import { useNavigate } from 'react-router-dom'

const Post = ({profilePicture, userName, userDesignation, post}) => {
  const navigate = useNavigate();

  const goToPostUser = () => {
    navigate(`/profile/${userName}`)
  }

  return (
    <div className={styles.postWrapper}>
        <div className={styles.userInfoContainer}>
            <div>
              <img className={styles.pfp} src={profilePicture} onClick={goToPostUser}/>
            </div>
            <div className={styles.userAboutContainer}>
              <div className={styles.userNameStyles} onClick={goToPostUser}>
                <p>{userName}</p>
              </div>
              <div className={styles.userDesignationStyles}>
                <p>{userDesignation}</p>
              </div>
            </div>
        </div>
        <div className={styles.postContainer}>
          <img src={post} />
        </div>
        <div className={styles.postDescription}>
          <p>Description of the post </p>
        </div>
    </div>
  )
}


export default Post