import { useState } from "react";
import React from "react";

const Example = () => {
  const [fruit, setFruit] = useState("");
  const onChange = (e) => setFruit(e.target.value);
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  return (
    <>
    
    {RADIO_COLLECTION.map(value => (
      <label key={value}>
        <input
          type="radio"
          value={value}
          checked={fruit === value}
          onChange={onChange}
        />
        {value}
      </label>
    ))}
          <h3>私は{fruit}が食べたい</h3>
    </>
  );
  //   return (
  //     <>

  //       {/* //   <label htmlFor="">
  //       //   <input
  //       //   type="radio"
  //       //   value={value}
  //       //   checked={fruit === value}
  //       //   onChange={onChange} />
  //       //   {value}
  //       // </label> */}
  //     {/* // <label htmlFor=""> */}
  //     //   <input
  //     //   type="radio"
  //     //   value="Apple"
  //     //   checked={fruit === "Apple"}
  //     //   onChange={onChange} />
  //     //   Apple
  //     // </label>
  //     // <label htmlFor="">
  //     //   <input
  //     //   type="radio"
  //     //   value="Banana"
  //     //   checked={fruit === "Banana"}
  //     //   onChange={onChange} />
  //     //   Banana
  //     // </label>
  //     // <label htmlFor="">
  //     //   <input
  //     //   type="radio"
  //     //   value="Cherry"
  //     //   checked={fruit === "Cherry"}
  //     //   onChange={onChange} />
  //     //   Cherry
  //     // </label>

  //     </>
  //       );
};

export default Example;
