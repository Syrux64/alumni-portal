import React from 'react'
import styles from './Post.module.css'
import UserProfile from '../../userProfile/UserProfile';
import { useNavigate } from 'react-router-dom'

const Post = ({profilePicture, userName, userDesignation, post, description}) => {
  const navigate = useNavigate();

  const goToUser = () => {
    navigate(`/profile/${userName}`)
  }

  return (
    <div className={styles.postWrapper}>
        <div className={styles.userInfoContainer}>
          <UserProfile profilePicture={profilePicture} userName={userName} />
            <div className={styles.userAboutContainer}>
              <div className={styles.userNameStyles} onClick={goToUser}>
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
          <p>{description}</p>
        </div>
    </div>
  )
}


export default Post