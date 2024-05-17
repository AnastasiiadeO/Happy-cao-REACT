import { useState } from 'react';
import Campo from "../Campo";
import ListaSalas from "../ListaSalas";
import Botao from "../Botao";
import './Formulario.css';

const Formulario = (props) => {
    

    const [nome, setNome] = useState('');
    const [raca, setRaca] = useState('');
    const [dono, setDono] = useState('');
    const [foto, setFoto] = useState('');
    const [sala, setSala] = useState('');

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoCaoRegistrado({
            nome,
            raca,
            dono, 
            foto,
            sala
        });
        setNome('');
        setRaca('');
        setDono('');
        setFoto('');
        setSala('');
    }

    return (
        <section className='formulario'>
            <h3>Preencha os dados para registrar o cãozinho</h3>
            <form onSubmit={aoSalvar}>
                <Campo 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="nome do cão"
                    valor={nome}
                    aoAlterar = {valor => setNome(valor)}
                />
                <Campo 
                    obrigatorio={true}
                    label="Raça do cão"
                    placeholder="raça do cão"
                    valor={raca}
                    aoAlterar = {valor => setRaca(valor)}
                />
                <Campo 
                    obrigatorio={true}
                    label="Nome do dono"
                    placeholder="nome do dono"
                    valor={dono}
                    aoAlterar = {valor => setDono(valor)}
                />
                <Campo 

                    label="Foto"
                    placeholder="link para foto"
                    valor={foto}
                    aoAlterar = {valor => setFoto(valor)}
                />

                <ListaSalas 
                    obrigatorio={true}
                    label="Salas"
                    itens={props.nomesDasSalas}
                    valor={sala}
                    aoAlterar={valor => setSala(valor)}
                />
                <Botao />
            </form>
        </section>
    )
}

export default Formulario;