import React from "react";
import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const [val2, setVal2] = useState("");
  const cleatVal = () => {
    setVal(""), setVal2("");
  };
  return (
    <div>
      <label htmlFor="123">ラベル</label>
      <input
        type="text"
        id="123"
        value={val}
        placeholder="こんにちは"
        onChange={(e) => setVal(e.target.value)}
      />
      <label htmlFor="456">ラベル</label>
      <textarea
        type="text"
        id="456"
        placeholder="こんにちは"
        value={val2}
        onChange={(e) => setVal2(e.target.value)}
      />
      <h3>val:{val}</h3>
      <h3>val2:{val2}</h3>
      <button onClick={cleatVal}>クリア</button>
    </div>
  );
};

export default Example;
