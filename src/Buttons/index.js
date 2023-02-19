import "./style.css"

const Buttons = ({ tasks, toggleDoneTasks, disabled, toggleHideDoneTasks }) => (
    tasks.length > 0 && (
        <>
            <button className="hideButton" onClick={toggleHideDoneTasks}>
                {`${toggleDoneTasks ? "Pokaż " : "Ukryj "}`}
                ukończone
            </button>
            <button className="hideButton" disabled={disabled}>
                Ukończ wszystkie
            </button>
        </>
    )
)

export default Buttons;