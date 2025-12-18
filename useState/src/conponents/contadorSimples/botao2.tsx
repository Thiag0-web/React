import { useState } from "react";

export default function Botao2(){
    const [inicial, setInicial] = useState(0);

    function contador(){
        setInicial(inicial + 1);
    }

    return(
        <>
        <Button onClick={contador}>Contador:{inicial}</Button>
        </>
    )

}