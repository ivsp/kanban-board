import "./style.css";

function AddCard() {
  return (
    <section className="add__card-container">
      <form className="form__container">
        <textarea
          id="textarea"
          name="card"
          cols="10"
          rows="2"
          placeholder="Enter a note"
        ></textarea>
        <div className="form__button-container">
          <button id="add_button" className="form__button" type="submit">
            Add
          </button>
          <button id="cancel_button" className="form__button" type="submit">
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddCard;
