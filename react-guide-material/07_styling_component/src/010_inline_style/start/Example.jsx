import { useState } from "react"

const Example = () => {
    const [isSelected, setIsSelected] = useState(false);

    const clickHandler = () => setIsSelected(prev => !prev);

    const style =  {
        display: "block",
        width: 120,
        height: 60,
        borderRadius:30,
        border: "none",
        fontWeight: "bold",
        fontSize: 18,
        cursor: "Pointer",
        margin: "auto",
        background: isSelected ? "pink" : "",
    }

    return (
        <>
            <button onClick={clickHandler} style={style}>ボタン</button>
            <div style={{textAlign:"center", paddingTop: 10,}}>{isSelected && "クリックされました。"}</div>
        </>
    )
};

export default Example;
