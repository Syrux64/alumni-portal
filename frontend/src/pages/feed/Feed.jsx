import React, { useEffect, useState } from 'react'
import Post from '../../component/ui/post/Post'
import CreatePost from '../../component/ui/createPost/CreatePost'
import styles from './Feed.module.css'
import axios from 'axios'

const Feed = () => {

  const [feedData, setFeedData] = useState(null);

  const apiCallFeeds = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/feed`);
      return response.data;
    } catch (error) {
      console.error("Error fetching feed data:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiCallFeeds();
      setFeedData(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(feedData);
  }, [feedData]);

  if(Array.isArray(feedData)) {
    return (
    <div className={styles.feedContainer}>
      <CreatePost />
      {
        feedData.map((post, index) => (
          <Post
            profilePicture={post.profilePicture} 
            userName={post.userName} 
            userDesignation={post.userDesignation}
            post={post.postImage} 
            description={post.postDescription}/>

        ))
      }
    </div>
    )
  }
}

export default Feed