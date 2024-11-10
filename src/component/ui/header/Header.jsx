import React from 'react'
import sritLogo from '../../../assets/srit-logo.png' 
import styles from './Header.module.css'

import profileIcon from "../../../assets/svg/profileDefault.svg"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <div className={styles.collegeWrapper}>
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
                <p>
                    profile
                </p>
            </div>
            <div className={styles.profileIcon}>
                <img src={profileIcon} />
            </div>
        </div>
    </div>
  )
}

export default Header