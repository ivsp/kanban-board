import logoN from './logoN.jpg'
import graficos from './graficos.png'
import "./style.css"
function Header(){
    return(
        <header className="header__container">
            <div className="header__logo__container">
                <img src={logoN} alt="Logo de Neoland"  className='header__logo'/>
            </div>
            <div className="header__text__container">
                <img src={graficos} alt=""  className='header__icon'/>
                <h4  className='header__text'>Version 1.0</h4>
            </div>
        </header>   

    )
    
}
export default Header;