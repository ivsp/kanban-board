import "./style.css";
import { useState } from "react";
import Card from "../card";
import AddCard from "../add-card/addcard";
import { CardContext } from "../../context/cards-context";
import { useContext } from "react";

function Column({ type }) {
  const { cardsData, setCardsData } = useContext(CardContext);
  const [wantAddCard, setWantAddCard] = useState(false);

  const addCard = (cardTitle) => {
    const date = new Date().toDateString();
    const time = new Date().toLocaleTimeString().substring(0, 5);
    console.log(time);
    const card = {
      title: cardTitle,
      columnID: type,
      date: date,
      time: time,
    };
    setCardsData([...cardsData, card]);
  };

  const openAddCard = () => setWantAddCard(true);
  const closeAddCard = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setWantAddCard(false);
  };
  cardsData.forEach((card, i) => (card.id = i + 1));
  console.log(cardsData);

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
        <button onClick={openAddCard} className="column__button-add-card">
          +
        </button>
      </div>

      {filteredCards.map(({ title, id, date, time }) => {
        return <Card time={time} date={date} id={id} title={title}></Card>;
      })}

      {wantAddCard ? (
        <AddCard
          handleAddCard={addCard}
          handleCloseAddCard={closeAddCard}
        ></AddCard>
      ) : (
        <></>
      )}
    </section>
  );
}

export default Column;
