import { useState } from "react";

import "./Example.css";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const [isActive,setIsActive] = useState(true);
  const click = () => setIsActive((prev) => !prev);
  return (
    <>
      <button className={`btn ${isSelected ? "selected" : ""}`} onClick={clickHandler}>
        ボタン
      </button>
      <div>
        {isSelected && "クリックされました。"}
      </div>

      <button onClick={click}>ボタン</button>
      <div>{isActive && "クリックされました"}</div>
    </>
  );
};

export default Example;