import "./style.css";
import { CardContext } from "../../context/cards-context";
import { useContext } from "react";

function BodyFilter() {
  const [cardsData, , , , , setFilterCards] = useContext(CardContext);
  const hadleOnChange = (e) => {
    const selectCards = cardsData.filter((card) =>
      card.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilterCards(selectCards);
  };

  return (
    <body className="filter__container">
      <div className="filter__info">
        <h5 className="filter__info1">Version 1.0</h5>
        <h5 className="filter__info2">Updated on 12 Apr</h5>
      </div>
      <div className="filter__div__container">
        <input
          onChange={hadleOnChange}
          type="text"
          className="filter__filter"
          placeholder="🔍 Filter Cards"
        />
      </div>
    </body>
  );
}
export default BodyFilter;
