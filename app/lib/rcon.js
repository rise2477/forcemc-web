// lib/rcon.js
import Rcon from 'rcon';

const rconConfig = {
  host: 'play.mc-forcesmp.xyz',   // IP ของเซิร์ฟเวอร์ Minecraft
  port: 25575,         // พอร์ต RCON (ค่าเริ่มต้นคือ 25575)
  password: '247756',  // รหัสผ่าน RCON ที่ตั้งในไฟล์ server.properties
};

export const sendRconCommand = async (command) => {
  const rcon = new Rcon(rconConfig.host, rconConfig.port, rconConfig.password);
  try {
    await rcon.connect();  // เชื่อมต่อกับเซิร์ฟเวอร์ Minecraft ผ่าน RCON
    const response = await rcon.send(command);  // ส่งคำสั่งไปยังเซิร์ฟเวอร์
    rcon.disconnect();  // หยุดการเชื่อมต่อ
    return response;  // ส่งผลลัพธ์จากคำสั่งกลับ
  } catch (error) {
    console.error('Error sending RCON command:', error);
    return null;
  }
};
