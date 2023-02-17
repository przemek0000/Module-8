import "./style.css"

const Buttons = ({ tasks, toggleWord, disabledTasks }) => (
    tasks.length > 0 && (
        <>
            <button className="hideButton">
                {`${toggleWord ? "Ukryj " : "Pokaż "}`}
                ukończone
            </button>
            <button className="hideButton" disabled={`${disabledTasks? "disabled" : ""}`}>
                Ukończ wszystkie
            </button>
        </>
    )
)

export default Buttons;