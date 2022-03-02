import './style.css';
import { CardContext } from '../../context/cards-context'
import { useContext } from 'react';
function BodyFilter() {
    const [cardsData, , , , , setFilterCard] = useContext(CardContext);
    const handleOnChange = (e) => {
        const selectCard = cardsData.filter(card => card.title.toLowerCase().includes(e.target.value.toLowerCase()))
        setFilterCard(selectCard)
    }
    return (
        <main className="filter__container">
            <div className="filter__info">
                <h5 className='filter__info1'>Version 1.0</h5>
                <h5 className='filter__info2'>Updated on 12 Apr</h5>
            </div>
            <div className='filter__div__container'>
                <input type="text" className="filter__filter" placeholder="🔍 Filter Cards" onChange={handleOnChange} />
            </div>
        </main>
    )
}
export default BodyFilter