import "./style.css"

const Buttons = ({ tasks, hideDoneTasks, disabled, toggleHideDoneTasks, markAllDoneTasks }) => (
    tasks.length > 0 && (
        <>
            <button className="hideButtons" onClick={toggleHideDoneTasks}>
                {`${hideDoneTasks ? "Pokaż " : "Ukryj "}`}
                ukończone
            </button>
            <button className="hideButtons" onClick={markAllDoneTasks} disabled={disabled}>
                Ukończ wszystkie
            </button>
        </>
    )
)

export default Buttons;