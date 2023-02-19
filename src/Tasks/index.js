import "./style.css";

const Tasks = ({ tasks }) => (
    <ul className="task">
        {tasks.map(task => (
            <li key={task.id} className={`task__list ${task.hide ? " task__list--hidden" : ""}`}>
                <button className="task__done">
                    {task.done ? "✔" : ""}
                </button>
                <div className={`task__content ${task.done ? "task__content--done" : ""}`}>
                    {task.content}
                </div>
                <button className="task__remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;