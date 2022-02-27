import "./style.css";
import { useContext } from "react";
import { CardContext } from "../../context/cards-context";

function Card( {title = 'card title', id, date } ) {
  const { cardsData, setCardsData } = useContext(CardContext);

  const handleDeleteCard = () => {
      const index = cardsData.findIndex(card => {
        return card.id === {id}
      })
      cardsData.splice(index, 1)
      setCardsData([...cardsData])
  }

  return (
    <article className={`card`}>
      <div className="card__main-info">

        <div className="card__title-container">

          <div className="card__progress-icon">
            <div className="card__progress-icon--status"></div>
          </div>

          <p className="card__title">{title}</p>

        </div>
        
        <div className="card__creation-info">
          <p className="card__creation-date">#{id} created on {date}</p>
        </div>
        
      </div>
      <button onClick={handleDeleteCard} className="card__delete-icon">🗑️</button>
    </article>
  );
}

export default Card;
