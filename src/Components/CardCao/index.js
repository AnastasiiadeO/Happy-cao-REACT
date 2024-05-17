import './CardCao.css';

const CardCao = (props) => {
    return(
        <div className='caozinho'>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.foto} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>Raça - {props.raca}</h5>
                <h5>Dono - {props.dono}</h5>
            </div>
        </div>

    )
}

export default CardCao;