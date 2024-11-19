import React, { useEffect } from 'react'
import axios from 'axios'
import Bio from '../../component/ui/bio/Bio'

const profile = () => {
  const apiCall = () => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/profile`).then((data) => {
      console.log(data.data);
    })
  }
  useEffect(() => {apiCall()}, [])

  

  return (
    <div>
      <Bio 
        profilePicture={profileData.profilePicture} 
        name={profileData.name} 
        headline={profileData.headline} 
        location={profileData.location} 
        summary={profileData.summary} 
        links={profileData.links} 
      />
    </div>
  )
}

export default profile