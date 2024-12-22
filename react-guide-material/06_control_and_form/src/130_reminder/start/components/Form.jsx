import { useState } from "react";

const Form = ({createTodo}) => {
    const [enteredTodo, setEnterTodo] = useState("");
    const addTodo = (e) => { 
        e.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 1e5),
            content: enteredTodo,
        };
        createTodo(newTodo);
        setEnterTodo("");
    }
    return (
        <>
        <form onSubmit={addTodo}>
        <input type="text" value={enteredTodo} onChange={(e) => setEnterTodo(e.target.value)}/>
        <button>追加</button>
        </form>
        </>
    )
}
export default Form;