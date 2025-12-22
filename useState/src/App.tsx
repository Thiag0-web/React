import { useContar } from "./conponents/hooks/useContar";
import "@/assets/styles/estilo.css"; // Importação do arquivo de estilo

function App() {
  const contar = useContar();

  return (
    <div className="container">
      <button className="btn-contador" onClick={contar.increment}>
        O contador está em: {contar.count}
      </button>
    </div>
  );
}

export default App;
