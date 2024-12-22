import { useEffect, useState } from "react";

function Clock() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const upDateTime = () => {
      // 時間を提示
      const now = new Date();
      const year = String(now.getFullYear()).padStart(2, "0");
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hour = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      //   文字列で表記
      const formattedDateTime = `${year}/${month}/${day}　${hour}:${minutes}:${seconds}`;

      setCurrentTime(formattedDateTime);
    };
    const timeId = setInterval(upDateTime, 1000);

    return () => clearInterval(timeId);
  },[]);

  
  return (
      <p>{currentTime}</p>
  )
  

}



export default Clock;
