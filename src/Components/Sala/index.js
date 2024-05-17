import CardCao from '../CardCao';
import './Sala.css';

const Sala = (props) => {

    return (
        (props.caozinhos.length > 0) && <section className='sala'>
            <h3 style={{background: props.cor}}> {props.nome} </h3>
            <div className='caozinhos'>
                {props.caozinhos.map(caozinho =>
                    <CardCao 
                        key={caozinho.nome}
                        nome={caozinho.nome}
                        raca={caozinho.raca}
                        dono={caozinho.dono}
                        foto={caozinho.foto}
                        corDeFundo={props.cor}
                    />
                )}

            </div>
        </section>
    )
}

export default Sala;