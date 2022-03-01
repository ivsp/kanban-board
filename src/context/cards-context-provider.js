import { CardContext } from "./cards-context";
import { useState } from "react";

function CardContextProvider({ children }) {
  const [cardsData, setCardsData] = useState([]);
  const [idCard, setIdCard] = useState(0);
  const [filterCards, setFilterCard]= useState([]);
  return (
    <CardContext.Provider value={[cardsData, setCardsData, idCard, setIdCard,filterCards, setFilterCard]}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
