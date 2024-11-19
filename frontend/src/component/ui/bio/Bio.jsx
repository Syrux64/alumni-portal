import React from 'react'
import styles from './Bio.module.css'
const Bio = ({ profilePicture, name, headline, location, summary, links }) => {
  return (
    <div className={styles.container}>
      {/* Profile Picture */}
      <div className={styles.profilePicture}>
        <img 
          src={profilePicture} 
          alt={`${name}'s Profile`} 
          className={styles.picture} 
        />
      </div>

      {/* User Information */}
      <div className={styles.info}>
        {/* User Name */}
        <div className={styles.userName}>
          {name}
        </div>

        {/* Headline */}
        <div className={styles.headline}>
          {headline}
        </div>

        {/* Location */}
        <div className={styles.location}>
          <span>📍 {location}</span>
        </div>

        {/* Summary */}
        <div className={styles.summary}>
          {summary}
        </div>
      </div>

      {/* Social Links */}
      <div className={styles.links}>
        {links.map((link, index) => (
          <a 
            key={index} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Bio