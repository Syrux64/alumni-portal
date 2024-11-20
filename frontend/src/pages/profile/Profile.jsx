import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Bio from '../../component/ui/bio/Bio';

const Profile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  const apiCall = (username) => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/profile/${username}`)
      .then((response) => {
        console.log(response.data); // Check the response
        setUserData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    apiCall(username);
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  if (Array.isArray(userData)) {
    return (
      <div>
        {userData.map((profile, index) => (
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
        Profile for {username}
      </div>
    );
  } else {
    return (
      <div>
        <Bio
          profilePicture={userData.profilePicture}
          name={userData.name}
          headline={userData.headline}
          location={userData.location}
          summary={userData.summary}
          links={userData.links}
        />
        Profile for {username}
      </div>
    );
  }
};

export default Profile;
