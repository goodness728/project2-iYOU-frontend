import { useEffect } from "react";
import { useState } from "react";

function Dashboard({ user }) {
  const [profileDB, setProfileDB] = useState({});

  // ON LOAD, GET DB PROFILE AND POPULATE ANSWERS
  useEffect(() => {
    async function getProfileDB() {
      console.log("getProfileDB called");
      const response = await fetch(
        `/api/profile/myProfileDB?userId=${user.basecampId}`,
      );
      if (response.ok) {
        const profileDBData = await response.json();
        setProfileDB(profileDBData);
        console.log("getprofiledb response: ", profileDBData);
      }
    }
    if (user) getProfileDB();
  }, [user]);

  return (
    <div>
      <h1> Dashboard</h1>
      <p> LinkedIn : <a href={profileDB.linkedInURL}>{profileDB.linkedInURL}</a></p>
      <p> Github : <a href={profileDB.githubURL}>{profileDB.githubURL}</a></p>
      {/* <p> Codewars: {profileDB.firstName}</p> */}
    </div>
  );
}

export default Dashboard;