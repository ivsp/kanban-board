import "./style.css";
import { useContext } from "react";
import { CardContext } from "../../context/cards-context";
import roja from './done.png'
import verde from './icone-cercle-vert.png'

function Card({ title = "card title", id, date, time, columnID }) {
  const [cardsData, setCardsData, , , userFilteredCards, setUserFilteredCards, check] = useContext(CardContext);

  const handleDeleteCard = (e) => {
    e.stopPropagation();
    const discardCard = userFilteredCards.filter(
      (card) => card.id !== id
    );
    setCardsData(discardCard);
    setUserFilteredCards(discardCard);
  };
  const handleDragStart = (e) => {
    console.log('handle drag start');
    e.dataTransfer.setData('card-id', e.target.id);

    // setTimeout(() => {
    //   const card = document.getElementById(id)
    //   card.style.display = 'flex'
    // }, 0);

  }

  const handleDrag = (e) => {
    console.log('handle drag');
    const card = document.getElementById(id)
    card.style.display = 'none'
  }

  const handleDragEnd = (e) => {
    const cardSelected = document.getElementById(id)
    cardSelected.style.display = 'flex';
    const column = e.nativeEvent.path[1].id;

    const newCards = userFilteredCards.map(card => {
      const cards = []
      if (card.id === parseInt(cardSelected.id)) {
        card.columnID = column
        cards.push(card)
      } else {
        cards.push(card)
      }
      return cards
    })
    check();
    // setCardsData([...newCards])
    // setUserFilteredCards([...newCards])
    console.log(newCards);





  }

  return (
    <article onDrag={handleDrag} onDragStart={handleDragStart} id={id} onDragEnd={handleDragEnd} draggable="true" className={`card`}>
      <div className="card__main-info">
        <div className="card__title-container" >
          <div >
            {columnID === 'Done' ? <img src={roja} alt="icono-rojo" className="icono__rojo"></img> : <img src={verde} alt="icono-verde" className="icono__verde"></img>}

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
