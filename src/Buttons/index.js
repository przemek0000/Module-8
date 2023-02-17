import "./style.css"

const Buttons = ({ tasks, toggleWord, disabled }) => (
    tasks.length > 0 && (
        <>
            <button className="hideButton">
                {`${toggleWord ? "Ukryj " : "Pokaż "}`}
                ukończone
            </button>
            <button className="hideButton" disabled={disabled}>
                Ukończ wszystkie
            </button>
        </>
    )
)

export default Buttons;