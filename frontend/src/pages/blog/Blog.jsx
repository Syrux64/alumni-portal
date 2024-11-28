// Blog.jsx
import React, { useState } from "react";
import styles from "./Blog.module.css";

const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const post = () => {
    const postData = {
      title: title,
      description: description,
    };
    
    console.log(postData);
    setTitle("");
    setDescription("");
  };

  return (
    <div className={styles.blogContainer}>
      <div className={styles.title}>
        <textarea
          className={styles.titlee}
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-label="Blog title"
        />
      </div>
      
      <div className={styles.writehere}>
        <textarea
          className={styles.writeheree}
          placeholder="Write here. You can also include @mentions"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          aria-label="Blog content"
        />
      </div>
      
      <div className={styles.button}>
        <button onClick={post}>Post</button>
      </div>
    </div>
  );
};

export default Blog;