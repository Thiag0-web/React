import { CardSection } from "./components/cardSection";
import { Ola } from "./components/pai";
import { Perfil } from "./components/Perfil";

function App() {
  return (
    <div >
      <Perfil nome="Thiago" idade={24} online={true} profissao="Desenvolvedor Front-end"/>
      <CardSection/>
      <Ola nome="Thiago" idade={24}/>

    </div>
  );
}

export default App;
