import React from 'react'
import styles from './PostButton.module.css'

const PostButton = ({image, placeHolder}) => {
  return (
    <div className={styles.container}>
      <div>
        <img src={image} />
      </div>
      <div>
        <p>
          {placeHolder}
        </p>  
      </div>
    </div>
  )
}

export default PostButton