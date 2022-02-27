import "./style.css";

function Card() {
  return (
    <article className="card">
      <div className="card__main-info">

        <div className="card__title-container">

          <div className="card__progress-icon">
            <div className="card__progress-icon--status"></div>
          </div>

          <p className="card__title">creación del CI/CD para el frontal</p>

        </div>
        
        <div className="card__creation-info">
          <p className="card__creation-date">#23 created on 30/07/2021 8:34:54</p>
        </div>
        
      </div>
      <button className="card__delete-icon">🗑️</button>
    </article>
  );
}

export default Card;
