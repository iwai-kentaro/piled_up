import { useState } from "react";

const Example = () => {
    const [count, setCount] = useState(0);

    const handleUp = () =>{
        setCount(count + 1);
    };

    const handleDown = () =>{
        setCount(count - 1);
    };


  return (
    <>
    <p>現在のカウント数：{count}</p>
    <button onClick={handleUp}>+</button>
    <button onClick={handleDown}>-</button>
    </>
  )
};

export default Example;
