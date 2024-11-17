import React, { useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const profile = () => {
  const { username } = useParams();

  const apiCall = (username) => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/profile/${username}`).then((data) => {
      console.log(data.data);
    })
  }
  useEffect(() => {
    apiCall(username)
  }, [username])

  return (
    <div>

    </div>
  )
}

export default profile