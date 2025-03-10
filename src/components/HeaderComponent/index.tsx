import './style.scss'
import menu from '/assets/icon/menu.svg'

const HeaderComponent = () => {
    return (
        <header className="header header--sticky">
            <div className="header__container">
                <div className="header__container-nav display-desktop">
                    <p>Works</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
                <div className="header__container-nav display-smartphone">
                    <img src={menu} alt="img-menu" />
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
