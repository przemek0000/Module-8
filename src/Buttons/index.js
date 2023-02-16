import "./style.css"

const Buttons = ({ tasks, toggleWord, disabledTasks }) => (
    tasks.length > 0 && (
        <>
            <button className="hideDoneButton">
                {`${toggleWord ? "Ukryj " : "Pokaż "}`}
                ukończone
            </button>
            <button className="doneAllButton" disabled={`${disabledTasks? "disabled" : ""}`}>
                Ukończ wszystkie
            </button>
        </>
    )
)

export default Buttons;