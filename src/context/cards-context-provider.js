import { CardContext } from "./cards-context";
import { useState } from "react";

function CardContextProvider({ children }) {
  const [cardsData, setCardsData] = useState([]);
  const [idCard, setIdCard] = useState(localStorage.getItem('idCards') !== null ? parseInt(localStorage.getItem('idCards')) : 0);
  const [filterCards, setFilterCard] = useState(localStorage.getItem('cards') !== null ? JSON.parse(localStorage.getItem('cards')) : []);

  const check = () => {
    if (filterCards.length === 0) {
      localStorage.removeItem("cards");
      localStorage.removeItem("idCards");
      setIdCard(0);
    } else {
      localStorage.setItem("cards", JSON.stringify(filterCards));
      localStorage.setItem("idCards", JSON.stringify(idCard));
    }
  }

  return (
    <CardContext.Provider value={[cardsData, setCardsData, idCard, setIdCard, filterCards, setFilterCard, check]}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
