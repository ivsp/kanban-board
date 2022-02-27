import './style.css'
import { useState } from 'react';
import Card from '../card';
import AddCard from '../add-card/addcard';
import { CardContext } from '../../context/cards-context';
import { useContext } from 'react';

function Column({type}) {
    const { cardsData, setCardsData } = useContext(CardContext);
    
    const addCard = (cardTitle) => {
        const today = new Date();
        const card = {
            title: cardTitle,
            columnID: type,
            date: 34534,
        }
        setCardsData([...cardsData, card]); 
    }
    cardsData.forEach((card, i) => card.id = i+1);
    console.log(cardsData);
    const filteredCards = cardsData.filter( card => card.columnID === type);

    return(
        <section className="column__container">
            <div className="column__header">
                <div className="column__main-info-container">
                    <p className="column__cards-counter column-text">{filteredCards.length}</p>
                    <p className="column__type column-text">{type}</p>
                </div>
                <button className="column__button-add-card">+</button>
            </div>

            {filteredCards.map(({title, id, date}) => {
                return <Card date={date} id={id} title={title}></Card>
            })}

            <AddCard handleAddCard={addCard}></AddCard>
        </section>
    )
}

export default Column;