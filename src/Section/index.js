import "./style.css";

const Section = ({ title, body, buttons }) => (
    <section className="section">
        <header className="section__header section__header--split ">
            <div>
                {title}
            </div>
            <div className="section__hiddenButtons">
                {buttons}
            </div>
        </header>
        <div className="section__body">
            {body}
        </div>
    </section>
)

export default Section;