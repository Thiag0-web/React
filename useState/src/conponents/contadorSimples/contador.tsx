import { useState } from "react";
import { Button } from "../ui/button";

export default function UsecontadorSoma() {
  //bestajada isso de começar com "Use"

  const [contador, setContador] = useState(0); // iniciador, setIniciador => useState declara inicial

  function contadorSoma() {
    setContador(contador + 1);
  }

  function contadorSubtrair() {
    setContador(contador - 1);
  }

  return (
    <>
      <Button onClick={contadorSoma}>
        Contador simples de soma
      </Button>
      <Button onClick={contadorSubtrair}>
        Contador simples de subtrair
      </Button>
      {contador}
    </>
  );
}
