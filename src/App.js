import Header from "./Header";
import Form from "./Form"
import Section from "./Section";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import { useState } from "react";


function App() {
    const [tasks, setTasks] = useState([
        { id: 1, content: "nauczyć się HTML/CSS", done: true },
        { id: 2, content: "nauczyć się JS", done: true },
        { id: 3, content: "nauczyć się react.js", done: false }
    ])

    const [hideDoneTasks, setHideDoneTasks] = useState(false);
    const toggleHideDoneTasks = () => {
        setHideDoneTasks(hideDoneTasks => !hideDoneTasks);
    }

    const toggleMarkAllDoneTasks = () => (
        setTasks(
            tasks.map(task => (
                { ...task, done: true }
            ))
        )
    )

    const toggleDoneTask = (id) => (
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
               return {
                ...task, done: !task.done
               }
            }
            return {...task}
        }))
    )

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
                body={<Tasks tasks={tasks}
                    hideDoneTasks={hideDoneTasks}
                    toggleDoneTask={toggleDoneTask} />}
                buttons={<Buttons tasks={tasks}
                    hideDoneTasks={hideDoneTasks}
                    disabled={tasks.every(({ done }) => done)}
                    toggleHideDoneTasks={toggleHideDoneTasks}
                    toggleMarkAllDoneTasks={toggleMarkAllDoneTasks} />}
            />
        </ >
    );
}

export default App;
