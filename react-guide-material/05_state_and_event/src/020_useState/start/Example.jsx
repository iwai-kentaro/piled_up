import { useState } from "react";

const Example = () => {
  let [val,setVal] = useState('入力するとここに反映されます。'); 

  return (
    <>
      <input 
      type="text" 
      onChange={(e) => {
        // const setFn = valArry[1];
        setVal(e.target.value)
      }}/> = {val}
    </>
  );
};

export default Example;
