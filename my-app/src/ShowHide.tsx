import { useState } from "react";



const ShowHide = () => {
    const [toggle, setToggle] = useState(true);
    const toggleSubmit = () => {
        setToggle(prev => !prev);
    }
    return (
        <>
        {toggle && <p>表示非表示のテキスト</p>}
        <button onClick={toggleSubmit}>トグルボタン</button>
        </>
    )
}

export default ShowHide;