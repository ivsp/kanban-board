import { CardContext } from "./cards-context";
import { useState } from "react";

function CardContextProvider({ children }) {
  const [cardsData, setCardsData] = useState([]);
  const [idCard, setIdCard] = useState(0);
  return (
    <CardContext.Provider value={[cardsData, setCardsData, idCard, setIdCard]}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
