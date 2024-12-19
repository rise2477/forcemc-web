import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServerStatus = () => {
  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await axios.get('https://api.mcsrvstat.us/2/play.forcemc.org');
        setServerData(response.data);
      } catch (error) {
        console.error('Error fetching server data:', error.message);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div>
      {serverData ? (
        <div>
          <h1 className=' font-bold'>Join Now!</h1>
          <p>IP:</p><a>play.forcemc.org</a>
          <p>Version: {serverData.version}</p>
        </div>
      ) : (
        <p>Loading server data...</p>
      )}
    </div>
  );
};

export default ServerStatus;
