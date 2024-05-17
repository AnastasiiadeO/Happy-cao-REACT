import './Campo.css';

const Campo = (props) => {
    const placeholderTexto = `Digite ${props.placeholder}...`;

    const aoDigitar = (e) => {
        props.aoAlterar (e.target.value);
    }

    return (
        <div className='campo-texto'>
            <label> 
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderTexto} />
        </div>
    )
}

export default Campo;