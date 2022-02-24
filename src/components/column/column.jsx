import './style.css'

function Column() {

    return(
        <section className="column__container">
            <div className="column__header">
                <div className="column__main-info-container">
                    <p className="column__cards-counter column-text">1</p>
                    <p className="column__type column__type-todo column-text">To do</p>
                </div>
                <button className="column__button-add-card">+</button>
               
            </div>
        </section>
    )
}

export default Column;