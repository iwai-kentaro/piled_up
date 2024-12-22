// import { useState } from "react";
import  { useCount } from "./useCount";

const Example = () => {
  // const [count, setCount] = useState(0);
  // const countUp = () => {
  //   setCount(count + 1);
  // }

  const {countUp, count} = useCount();

  return (
    <>
      <h3>練習問題</h3>
      <p>
        記述を変更し、完成コードと同じ状態になるようにしてください。
        startフォルダの中にhooks.jsというファイルを作成しその中でuseCountというカスタムフックを作成してください。
      </p>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;
