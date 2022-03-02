import { CardContext } from "./cards-context";
import { useState } from "react";

function CardContextProvider({ children }) {
  const [cardsData, setCardsData] = useState([]);
  const [idCard, setIdCard] = useState(0);
  const [filterCards, setFilterCards] = useState([]);
  const [update, setUpdate] = useState(true);

  return (
    <CardContext.Provider
      value={[
        cardsData,
        setCardsData,
        idCard,
        setIdCard,
        filterCards,
        setFilterCards,
        update,
        setUpdate,
      ]}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
