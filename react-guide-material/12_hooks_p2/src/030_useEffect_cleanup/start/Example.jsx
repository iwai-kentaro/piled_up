import { useEffect, useState } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);
  
  const Timer = () => {
    const [time, setTime] = useState(0);
    useEffect(() => {
      let intervalId = null;
      intervalId = window.setInterval(() => {
        console.log('useEffect is called');
        setTime(prev => prev + 1);
      }, 1000);
      return () => {
        window.clearInterval(intervalId);
      }
    }, [])
    
    useEffect(() => {
      document.title = 'counter:' + time;
      window.localStorage.setItem('time-key-end', time)
    }, [time]);

    return (
      <>
            <h3>
        <time>{time}</time>
        <span>秒経過</span>
      </h3>
      </>
    )
  }

  return (
    <div className="">
      {isDisp && <Timer />}
      <button onClick={()=> setIsDisp(prev => !prev)}>トグル</button>
    </div>
    );
};

export default Example;
