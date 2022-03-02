import { CardContext } from "./cards-context";
import { useState } from "react";

function CardContextProvider({ children }) {
  const [cardsData, setCardsData] = useState([]);
  const [idCard, setIdCard] = useState(localStorage.getItem('idCards') !== null ? parseInt(localStorage.getItem('idCards')) : 0);
  const [filterCards, setFilterCard] = useState(localStorage.getItem('cards') !== null ? JSON.parse(localStorage.getItem('cards')) : []);

  const check = () => {
    const filter = filterCards.some(c => c.columnID === 'Done')

    const cardsValue2 = localStorage.getItem("cards");
    const parsed = JSON.parse(cardsValue2)
    console.log(parsed);
    console.log(cardsValue2);
    console.log(filterCards);
    console.log(filterCards.length);

    if (filterCards.length === 0) {
      console.log('entrando en length 0');
      localStorage.removeItem("cards");
      localStorage.removeItem("idCards");
      setIdCard(0);
    }
    else if (filterCards.length >= 1) {
      console.log('entrando en length >= 1');
      localStorage.setItem("cards", JSON.stringify(filterCards));
      localStorage.setItem("idCards", JSON.stringify(idCard));
    } else {
      console.log('entrando en else');
      const cardsValue = localStorage.getItem("cards");
      if (cardsValue !== null) {
        const idValue = localStorage.getItem("idCards");
        setCardsData(JSON.parse(cardsValue));
        setFilterCard(JSON.parse(cardsValue));
        setIdCard(parseInt(idValue));
      }
    }

    // localStorage.setItem('cards', JSON.stringify(filterCards))
    // console.log(localStorage.getItem('cards'));
    // setFilterCard([...cardsData])
    // console.log(filterCards);

    // if (localStorage.getItem('cards') === null) {
    //   setFilterCard([]);
    // } else {
    //   const rawCards = localStorage.getItem('cards');
    //   const cards = JSON.parse(rawCards);
    //   setFilterCard(cards);
    // }
  }

  // useEffect(() => {
  //   console.log(update);
  //   if (filterCards.length === 0 && !update) {
  //     localStorage.removeItem("cards");
  //     localStorage.removeItem("idCards");
  //     setIdCard(0);
  //   }
  //   if (filterCards.length !== 0) {
  //     localStorage.setItem("cards", JSON.stringify(filterCards));
  //     localStorage.setItem("idCards", JSON.stringify(idCard));
  //   } else {
  //     const cardsValue = localStorage.getItem("cards");
  //     if (cardsValue !== null) {
  //       const idValue = localStorage.getItem("idCards");
  //       setCardsData(JSON.parse(cardsValue));
  //       setFilterCards(JSON.parse(cardsValue));
  //       setIdCard(parseInt(idValue));
  //     }
  //   }
  // }, [update]);

  return (
    <CardContext.Provider value={[cardsData, setCardsData, idCard, setIdCard, filterCards, setFilterCard, check]}>
      {children}
    </CardContext.Provider>
  );
}

export default CardContextProvider;
