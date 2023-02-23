import "./style.css";
import { useState } from "react";

const Form = ({ addNewTask }) => {
    const [readInput, setReadInput] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimReadInput = readInput.trim();
        if (trimReadInput !== "") {
            addNewTask(trimReadInput);
            setReadInput("");
        }
    }


    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                value={readInput}
                onChange={({ target }) => setReadInput(target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus />
            <button className="form__addNewTaskbutton">Dodaj zadanie</button>
        </form>
    )
}

export default Form;