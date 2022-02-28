import "./style.css";
import { useState } from "react";

function AddCard({ handleAddCard, handleCloseAddCard }) {
  const [cardDescription, setCardDescription] = useState("");

  return (
    <section className="add__card-container">
      <div className="form__container">
        <textarea
          id="textarea"
          name="card"
          cols="10"
          rows="2"
          placeholder="Enter a note"
          onChange={(e) => setCardDescription(e.target.value)}
        ></textarea>
        <div className="form__button-container">
          <button
            disabled={cardDescription.length ? false : true}
            onClick={() => handleAddCard(cardDescription)}
            id="add_button"
            className="form__button"
            type="submit"
          >
            Add
          </button>
          <button
            onClick={(e) => handleCloseAddCard(e)}
            id="cancel_button"
            className="form__button"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddCard;
