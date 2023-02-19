import "./style.css"

const Buttons = ({ tasks, hideDoneTasks, disabled, toggleHideDoneTasks, toggleMarkAllDoneTasks }) => (
    tasks.length > 0 && (
        <>
            <button className="hideButtons" onClick={toggleHideDoneTasks}>
                {`${hideDoneTasks ? "Pokaż " : "Ukryj "}`}
                ukończone
            </button>
            <button className="hideButtons" onClick={toggleMarkAllDoneTasks} disabled={disabled}>
                Ukończ wszystkie
            </button>
        </>
    )
)

export default Buttons;