import React, { useState } from "react";

const Example = () => {
  const [isChecked, setIsChecked] = useState(true);
  const toggleChecked = (e) => {
    setIsChecked((prevState) => {
      let state = !prevState;
      return state;
    })
  }
  return (  
  <>
  <label htmlFor="my-check">チェック:</label>
  <input 
  type="checkbox"
  id="my-check"
  checked={isChecked}
  onChange={(e)=> toggleChecked(e)} />
  <h3>{isChecked ? "ON!" : "OFF!"}</h3>
  </>
  )
};

export default Example;
