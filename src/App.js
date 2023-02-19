import Header from "./Header";
import Form from "./Form"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import { useState } from "react";

const tasks = [
    { id: 1, content: "nauczyć się HTML/CSS", done: true, hide: false },
    { id: 2, content: "nauczyć się JS", done: true, hide: false },
    { id: 3, content: "nauczyć się react.js", done: false, hide: false }
];


function App() {
    const [toggleDoneTasks, setHideDoneTasks] = useState(false);
    const toggleHideDoneTasks = () => {
        setHideDoneTasks(toggleDoneTasks => !toggleDoneTasks)
    }

    return (
        <>
            <Header
                title={"Lista zadań"}
            />
            <Section
                title={"Dodaj nowe zadanie"}
                body={<Form />}
            />
            <Section
                title={"Lista zadań"}
                body={<Tasks tasks={tasks} toggleDoneTasks={toggleDoneTasks}/>}
                buttons={<Buttons tasks={tasks}
                    toggleDoneTasks={toggleDoneTasks}
                    disabled={tasks.every(({ done }) => done)} 
                    toggleHideDoneTasks={toggleHideDoneTasks}/>}
            />
        </ >
    );
}

export default App;
