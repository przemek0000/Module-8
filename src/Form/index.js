import "./style.css";

const Form = () => (
    <form className="section__form">
        <input className="section__input" placeholder="Co jest do zrobienia?" autoFocus />
        <button className="section__addNewTaskbutton">Dodaj zadanie</button>
    </form>
);

export default Form;