import { useState } from "react";
import { Button } from "../ui/button";

export default function ModoNoturno() {
  const [cor, setCor] = useState("white");

  function mudaCor() {
    setCor((atual) => (atual === "white" ? "#121212" : "white"));
  }

  return (
    <div
      style={{
        backgroundColor: cor,
      }}
    >
      <p style={{ color: cor === "white" ? "black" : "white" }}>
        Cor atual: {cor}
      </p>
      <Button onClick={mudaCor}>Trocar cor</Button>
    </div>
  );
}
