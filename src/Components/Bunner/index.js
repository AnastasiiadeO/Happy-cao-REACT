import './Bunner.css';

const Bunner = () => {
    return (
        <header className="bunner">
            <div className='info'>
                <img className="logo" src="./img/logo2.png" alt='logo Happy Cao' />
                <h2 className='titulo'>Registra cada cliente de 4 patas na sua sala!</h2>
            </div>
            
            <img className="foto" src="./img/banner.png" alt="cachorros" />
        </header>
    )
}

export default Bunner;