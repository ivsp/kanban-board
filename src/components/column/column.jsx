import "./style.css";
import { useState } from "react";
import Card from "../card";
import AddCard from "../add-card/addcard";
import { CardContext } from "../../context/cards-context";
import { useContext } from "react";

function Column({ type }) {
  const [cardsData, setCardsData, idCard, setIdCard] = useContext(CardContext);
  const [printAddCard, setPrintAddCard] = useState(false);

  const addCard = (cardTitle) => {
    console.log(typeof idCard);
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString().substring(0, 5);
    const card = {
      title: cardTitle,
      columnID: type,
      id: idCard + 1,
      date: date,
      time: time,
    };
    setCardsData([...cardsData, card]);
    setPrintAddCard(false);
    setIdCard(idCard + 1);
  };

  const openAddCard = () => setPrintAddCard(!printAddCard);
  const closeAddCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPrintAddCard(false);
  };
  // cardsData.forEach((card, i) => (card.id = i + 1)); ya no tiene sentido, asignamos el id con una variable de estado

  const clearAllDoneCards = (e) => {
    e.stopPropagation();
    while (cardsData.find(e => e.columnID === 'Done')) {
      cardsData.forEach((card, i) => {
        if (card.columnID === 'Done') {
          cardsData.splice(i, 1);

        }
      });
    }
    setCardsData([...cardsData])
  }

  const filteredCards = cardsData.filter((card) => card.columnID === type);

  return (
    <section className="column__container">
      <div className="column__header">
        <div className="column__main-info-container">
          <p className="column__cards-counter column-text">
            {filteredCards.length}
          </p>
          <p className="column__type column-text">{type}</p>
        </div>
        <div className="column__right-side-actions">

          {printAddCard ? (
            <button onClick={openAddCard} className="column__button-add-card">
              -
            </button>
          ) : (
            <button onClick={openAddCard} className="column__button-add-card">
              +
            </button>
          )}
          {type === 'Done' ? <button onClick={clearAllDoneCards} className="column__button-clear-all">Clear All</button> : ''}
        </div>

      </div>
      {printAddCard ? (
        <AddCard
          handleAddCard={addCard}
          handleCloseAddCard={closeAddCard}
        ></AddCard>
      ) : (
        <></>
      )}

      {filteredCards.map(({ title, id, date, time }) => {
        return <Card time={time} date={date} id={id} title={title}></Card>;
      })}
    </section>
  );
}

export default Column;
