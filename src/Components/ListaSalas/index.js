import './ListaSalas.css';

const ListaSalas = (props) => {
    return (
        <div className='lista-salas'>
            <label>{props.label}</label>
            <select onChange={e => props.aoAlterar(e.target.value)} value={props.valor} required={props.obrigatorio}>
                <option value=""></option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSalas;