import "./style.css"

const Buttons = ({ tasks, hideDoneTasks, disabled, toggleHideDoneTasks }) => (
    tasks.length > 0 && (
        <>
            <button className="hideButton" onClick={toggleHideDoneTasks}>
                {`${hideDoneTasks ? "Pokaż " : "Ukryj "}`}
                ukończone
            </button>
            <button className="hideButton" disabled={disabled}>
                Ukończ wszystkie
            </button>
        </>
    )
)

export default Buttons;