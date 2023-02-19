import "./style.css";

const Tasks = ({ tasks, hideDoneTasks, toggleDoneTask, removeButton }) => (
    <ul className="task">
        {tasks.map(task => (
            <li key={task.id} className={`task__list ${task.done && hideDoneTasks ? " task__list--hidden" : ""}`}>
                <button className="task__done" onClick={() => toggleDoneTask(task.id)}>
                    {task.done ? "✔" : ""}
                </button>
                <div className={`task__content ${task.done ? "task__content--done" : ""}`}>
                    {task.content}
                </div>
                <button className="task__remove" onClick={() => removeButton(task.id)}>
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;