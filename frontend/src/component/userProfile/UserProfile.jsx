import React from 'react'
import styles from './UserProfile.module.css'
import { useNavigate } from 'react-router-dom'


const UserProfile = ({profilePicture, userName}) => {
    const navigate = useNavigate();
    const goToUser = () => {
      navigate(`/profile/${userName}`)
    }
    
  return (
    <div>
        <img className={styles.pfp} src={profilePicture} onClick={goToUser}/>
    </div>
  )
}

export default UserProfile