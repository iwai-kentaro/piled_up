import { useState } from "react";

const Example = () => {

const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(10);
const [count3, setCount3] = useState(100);
const countUp1 = () => {
    setCount1(count1 => count1 + 1);
} 
const countUp2 = () => {
    setCount2(count2 => count2 + 1);
} 
const countUp3 = () => {
    setCount3(count3 => count3 + 1);
} 

return (
    <>
    <p>ボタンAを{count1}回押しました</p>
    <button onClick={countUp1}>ボタンA</button>
    <p>ボタンBを{count2}回押しました</p>
    <button onClick={countUp2}>ボタンA</button>
    <p>ボタンCを{count3}回押しました</p>
    <button onClick={countUp3}>ボタンA</button>
    </>
)
};

export default Example;
