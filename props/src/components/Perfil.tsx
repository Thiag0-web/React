interface PerfilProps  {
    nome: string,
    idade: number,
    online: boolean,
    profissao: string;
    
}

export function Perfil({nome, idade, online , profissao}: PerfilProps){
    return(
        <div>
            <h2>{nome}</h2>
            <p>{idade}</p>
            <p>Profissão: {profissao}</p>
            <p>Status: {online ? "online" : "offline"}</p>
        </div>
    )
}