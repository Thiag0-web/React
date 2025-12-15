import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function UseinputViva() {
  const [texto, setTexto] = useState("");

  function inputViva(e: React.ChangeEvent<HTMLInputElement>) { // coloquei a tipagem só pra sair o erro da any, peguei com chatgpt
    setTexto(e.target.value);
  }
  
  return (
    <> {/* buguei ao tentar entender sobre a função do "texto" aqui, não pensei que pudesse usar ela 2x, achei que ia dar erro */}
    <label htmlFor="thiago">qualquer coisa</label>
      <Input type="texto" onChange={inputViva} value={texto} id="thiago"/> 
      <p>Você está digitando: {texto} </p>
      <Button onClick={() => setTexto("")}>Limpar</Button>
    </>
  );
}
