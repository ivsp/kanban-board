import "./style.css";
import { useState } from "react";
import Card from "../card";
import AddCard from "../add-card/addcard";
import { CardContext } from "../../context/cards-context";
import { useContext, useEffect } from "react";


function Column({ type }) {
  const [cardsData, setCardsData, idCard, setIdCard, userFilteredCards, setUserFilteredCards, check] = useContext(CardContext);
  const [printAddCard, setPrintAddCard] = useState(false);


  const filteredCards = userFilteredCards.filter((card) => card.columnID === type)

  const addCard = (cardTitle) => {
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
    setUserFilteredCards([...userFilteredCards, card]);
    setPrintAddCard(false);
    setIdCard(idCard + 1);

  };

  check();
  const openAddCard = () => setPrintAddCard(!printAddCard);
  const closeAddCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setPrintAddCard(false);
  };

  const clearAllDoneCards = (e) => {
    e.stopPropagation();
    const discardDoneCards = userFilteredCards.filter(
      ({ columnID }) => columnID !== "Done"
    );

    setCardsData(discardDoneCards);
    setUserFilteredCards(discardDoneCards);

  };


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
          {type === "Done" ? (
            <button
              onClick={clearAllDoneCards}
              className="column__button-clear-all"
            >
              Clear All
            </button>
          ) : (
            ""
          )}
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

      {filteredCards.map(({ title, id, date, time, columnID }) => {
        return <Card key={id} time={time} date={date} id={id} title={title} columnID={columnID}></Card>;
      })}
    </section>
  );
}

export default Column;
