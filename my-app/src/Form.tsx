import { useState } from "react";

const Form = () => {

    const [form, setForm] = useState('');
    const formChange = (e :React.ChangeEvent<HTMLInputElement>):void => {
    setForm(e.target.value)
    }
    return (
        <>
        <p>{form}</p>
        <input type="text" onChange={formChange} value={form}/>
        </>
    )
}

export default Form;