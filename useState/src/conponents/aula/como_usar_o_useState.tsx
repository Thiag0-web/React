import { useState } from "react";

export function EstudoUseState() {
  const [nome, setNome] = useState("");
  const [mostrarTexto, setMostrarTexto] = useState(false);
  const [perfil, setPerfil] = useState({ idade:24, cidade: "Florianopolis"});

  return (
    <div>
      <h1>useState</h1>
      <br />
      <button onClick={() => setNome("Thiago")}>Alterar nome</button>
      <p>Nome: {nome}</p>
      <br />
      <br />

      <button onClick={() => setMostrarTexto((prev) => !prev)}>
        Exibir/ocultar
      </button>
      {mostrarTexto && <p>Texto está sendo exibido.</p>}
      <br />
      <br />

      <div>
        <button onClick={() => setPerfil({ ...perfil, cidade: "Bahia" })}>
            Alterar Cidade</button>
            <h3>Idade: {perfil.idade}</h3>
            <h3>Cidade: {perfil.cidade}</h3>
      </div>
    </div>
  );
}
