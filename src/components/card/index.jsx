import "./style.css";
import { useContext } from "react";
import { CardContext } from "../../context/cards-context";
import roja from "./done.png";
import verde from "./icone-cercle-vert.png";

function Card({ title = "card title", id, date, time, columnID }) {
  const [cardsData, setCardsData, , , , setFilterCards, update, setUpdate] =
    useContext(CardContext);

  const handleDeleteCard = (e) => {
    e.stopPropagation();
    console.log();
    cardsData.forEach((card, i) => {
      if (card.id === id) {
        cardsData.splice(i, 1);
        setCardsData([...cardsData]);
        setFilterCards([...cardsData]);
        setUpdate(!update);
      }
    });
  };

  return (
    <article className={`card`}>
      <div className="card__main-info">
        <div className="card__title-container">
          <div>
            {columnID === "Done" ? (
              <img src={roja} alt="icono-rojo" className="icono__rojo"></img>
            ) : (
              <img src={verde} alt="icono-verde" className="icono__verde"></img>
            )}
          </div>

          <p className="card__title">{title}</p>
        </div>

        <div className="card__creation-info">
          <p className="card__creation-date">
            #{id} created on {date} at {time}
          </p>
        </div>
      </div>
      <button onClick={handleDeleteCard} className="card__delete-icon">
        🗑️
      </button>
    </article>
  );
}

export default Card;
