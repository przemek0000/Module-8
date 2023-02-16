import "./style.css";

const Section = ({title, type, buttons}) => (
    <section className="section">
    <div className="section__header section__header--split ">
        <div>
           {title}
        </div>
        <div className="section__hiddenButtons">
            {buttons}
        </div>
    </div>
    <div className="section__body">
        {type}
    </div>
</section>
)

export default Section;