import { CardContext } from "./cards-context";
import { useState } from "react";

function CardContextProvider({ children }) {
    const [ cardsData, setCardsData ] = useState([]);
    return(
        <CardContext.Provider value={{cardsData, setCardsData}}>
            {children}
        </CardContext.Provider>
    )
}

export default CardContextProvider;