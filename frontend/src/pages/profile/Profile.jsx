import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Bio from '../../component/ui/bio/Bio';
import userProfile from '../../temp/userProfile.json';

const Profile = () => {
  const { username } = useParams();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

const apiCall=(username)=>{
  axios.get(`${import.meta.env.VITE_API_URL}/api/profile/${username}`).then ((data)=>{
    console.log(data.data);
  })
}

  useEffect(() => {
    if (username) {
      apiCall(username);
    }
  }, [username]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching profile data. Please try again later.</p>;
  }


  return (
    <div>
      {userProfile.map((profile, index) => (
        <Bio
          key={index} 
          profilePicture={profile.profilePicture}
          name={profile.name}
          headline={profile.headline}
          location={profile.location}
          summary={profile.summary}
          links={profile.links}
        />
      ))}
    </div>
  );
};

export default Profile;
