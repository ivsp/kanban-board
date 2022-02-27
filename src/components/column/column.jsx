import './style.css'

function Column({type, cardCounter = 0}) {

    return(
        <section className="column__container">
            <div className="column__header">
                <div className="column__main-info-container">
                    <p className="column__cards-counter column-text">{cardCounter}</p>
                    <p className="column__type column-text">{type}</p>
                </div>
                <button className="column__button-add-card">+</button>
            </div>
        </section>
    )
}

export default Column;