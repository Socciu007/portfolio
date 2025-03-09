import './style.scss'

const HeaderComponent = () => {
    return (
        <header className="header header--sticky">
            <div className="header__container">
                <div className="header__container-nav">
                    <p>Works</p>
                    <p>Projects</p>
                    <p>Contact</p>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent
