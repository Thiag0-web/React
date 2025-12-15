import { useState } from "react";
import { Input } from "../ui/input";

export default function Interruptor() {
  const [botao, setBotao] = useState(true);

  function mudarEstado(e: React.ChangeEvent<HTMLInputElement>) {
    setBotao(e.target.checked);
  }

  return (
    <>
        <Input type="checkbox" checked={botao} onChange={mudarEstado}/>Botão
        <p>Liga/desliga: o botão está: {botao ? 'ligado' : 'desligado'}</p>
    </>
  );
}
