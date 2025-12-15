import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function InputViva2(){
    const [texto, setTexto] = useState("");

    function inputViva2(e: React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }

    return(
    <>
      <Input type="texto" onChange={inputViva2} value={texto}/> 
      <p>Você está digitando: {texto} </p>
      <Button onClick={() => setTexto("")}>Limpar</Button>
    </>
    )


}