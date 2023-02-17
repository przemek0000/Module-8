import Header from "./Header";
import Form from "./Form"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";

const tasks = [
    { id: 1, content: "nauczyć się HTML/CSS", done: true, hide: false },
    { id: 2, content: "nauczyć się JS", done: true, hide: false },
    { id: 3, content: "nauczyć się react.js", done: false, hide: false }
];
let toggleWord = true;


function App() {
    return (
        <>
            <Header
                title={"Lista zadań"}
            />
            <Section
                title={"Dodaj nowe zadanie"}
                type={<Form />}
            />
            <Section
                title={"Lista zadań"}
                type={<Tasks tasks={tasks} />}
                buttons={<Buttons tasks={tasks}
                    toggleWord={toggleWord}
                    disabled={tasks.every(({done}) => done)} />}
            />
        </ >
    );
}

export default App;
