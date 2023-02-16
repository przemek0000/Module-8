import "./style.css";

const Tasks = ({ tasks }) => (
    <ul className="task">
        {tasks.map(task => (
            <div key={task.id} className="task__underLine" hidden={task.hide ? "hidden" : ""}>
                <li className="task__list" >
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
            </div>
        ))}
    </ul>
);

export default Tasks;