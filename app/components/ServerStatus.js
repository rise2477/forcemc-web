import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ServerStatus = () => {
  const [serverData, setServerData] = useState(null);
  const [playerImages, setPlayerImages] = useState({});  // state สำหรับเก็บ URL ของภาพโปรไฟล์

  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await axios.get('https://api.mcsrvstat.us/2/play.mc-forcesmp.xyz');
        setServerData(response.data);
      } catch (error) {
        console.error('Error fetching server data:', error.message);
      }
    };

    fetchServerData();
  }, []);

  useEffect(() => {
    // เมื่อข้อมูลผู้เล่นมาถึงแล้ว, เราจะดึงข้อมูลภาพโปรไฟล์จาก MCHeads
    if (serverData && serverData.players.list) {
      serverData.players.list.forEach((player) => {
        // ทำการดึง UUID ของผู้เล่นจากชื่อเพื่อใช้ในการดึงภาพ
        const uuid = player;  // สมมติว่า player คือ UUID ของผู้เล่น
        fetchPlayerImage(uuid);
      });
    }
  }, [serverData]);

  const fetchPlayerImage = async (uuid) => {
    try {
      const response = await axios.get(`https://mc-heads.net/avatar/${uuid}`);
      setPlayerImages((prevImages) => ({
        ...prevImages,
        [uuid]: response.request.responseURL, // เก็บ URL ของรูปภาพ
      }));
    } catch (error) {
      console.error(`Error fetching image for player ${uuid}:`, error);
    }
  };

  return (
    <div>
      {serverData ? (
        <div>
          {serverData.players.list && serverData.players.list.length > 0 ? (
            <div className=' justify-center justify-items-center items-center text-center'>
              <h4 className=' font-bold'>Player List:</h4>
              <div>
                {serverData.players.list.map((player, index) => (
                  <div className=' justify-center items-center text-center flex flex-col my-5' key={index}>
                    {playerImages[player] ? (
                      <img src={playerImages[player]} alt={player} style={{ width: '20px', height: '20px', marginRight: '8px'}} />
                    ) : (
                      <span>No Image</span>
                    )}
                    <p>
                      {player}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <p>No players online</p>
          )}
        </div>
      ) : (
        <p>Loading server data...</p>
      )}
    </div>
  );
};

export default ServerStatus;
