import { useEffect, useState } from "react";
import Bunner from "./Components/Bunner";
import Sala from "./Components/Sala";
import Formulario from "./Components/Formulario";
import Footer from "./Components/Footer";


function App() {

  const salas = [
    {
      nome: 'Sala Rosa',
      cor: '#F096D7'
    },
    {
      nome: 'Sala Amarela',
      cor: '#FFCB5B'
    },
    {
      nome: 'Sala Azul',
      cor: '#B1B1FF'
    }
  ]


  const [caozinhos, setCaozinhos] = useState(() => {
    const localValue = localStorage.getItem('Caozinhos');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });
  useEffect(()=> {
    localStorage.setItem('Caozinhos', JSON.stringify(caozinhos))
  }, [caozinhos]) //sempre quando muda [cao] vai mandar dados para localstorage*/

  const aoNovoCaoRegistrado = (caozinho) => {
    setCaozinhos([...caozinhos, caozinho]); //adicionamos novo cao nos caozinhos ja existentes
  }

  return (
    <div className="App">
      <Bunner />
      <Formulario nomesDasSalas={salas.map(sala => sala.nome)} aoCaoRegistrado = {caozinho => aoNovoCaoRegistrado(caozinho)}/>
      
      {salas.map (sala => <Sala
        key={sala.nome}
        nome={sala.nome}
        cor={sala.cor}
        caozinhos={caozinhos.filter(caozinho=> caozinho.sala === sala.nome)}
      />)}
      <Footer />
    </div>
  );
}

export default App;
