import React, { useEffect } from 'react'
import axios from 'axios'

const profile = () => {
  const apiCall = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/profile`).then((data) => {
      console.log(data.data);
    })
  }
  useEffect(() => {apiCall()}, [])

  return (
    <div>profile</div>
  )
}

export default profile