import React from 'react'
import { useNavigate } from 'react-router-dom'

import sritLogo from '../../../assets/srit-logo.png' 
import styles from './Header.module.css'
// import Bio from '../profile/Bio.jsx'

import profileIcon from "../../../assets/svg/profileDefault.svg"

const Header = () => {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  }

  const goToHome = () => {
    navigate('/')
  }

  return (
    <div className={styles.headerContainer}>
        <div className={styles.collegeWrapper} onClick={goToHome}>
            <div className={styles.sritLogo}>
                <img src={sritLogo} />
            </div>
            <div className={styles.collegeTitle}>
                <p>
                    SRI RAMAKRISHNA <br/>INSTITUTE OF TECHNOLOGY
                </p>
            </div>
        </div>
        <div className={styles.searchBar}>
            <input placeholder='Search' type='search'/>
        </div>
        <div className={styles.profileWrapper}>
            <div className={styles.profileUsernname}>
                <p onClick={goToProfile}>
                    profile
                </p>
            </div>
            <div className={styles.profileIcon} >
                <img src={profileIcon} onClick={goToProfile}/>
            </div>
        </div>
    </div>
  )
}

export default Header