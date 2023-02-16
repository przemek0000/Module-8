import Header from "./Header";
import Form from "./Form"
import Container from "./Container"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
    {id: 1, content: "siema", done: true, hide: false},
    {id: 2, content: "co tam", done: false, hide: false},
    {id: 3, content: "react.js na dzisiaj ?", done: false, hide: false}
];
let toggleWord = true;
let disabledTasks = false;

function App() {
    return (
        <Container>
            <Header title={"Lista zadań"} />
            <Section title={"Dodaj nowe zadanie"} type={<Form />} />
            <Section title={"Lista zadań"} type={<Tasks tasks={tasks} />} buttons={<Buttons tasks={tasks} toggleWord={toggleWord} disabledTasks={disabledTasks}/>}/>
        </ Container >
    );
}

export default App;
