import { useState } from "react"

export function UserProfile() {
    const [name, setName] = useState("")
    const [online, setOnline] = useState("offline")
    const [user, setUser ] = useState({ name: "", status: "offline", points: 0})

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function toggleStatus() {
        setOnline((prevStatus) =>  (prevStatus === "online" ? "offline" : "online"))
    }

    function Status(){
        
    }

    return(
        <div>
            <p>Nome de usuário: {name}</p>
            <p>Status: {online}</p>
            <input 
                type="text" 
                onChange={handleNameChange} 
                value={name}
                placeholder="Digite seu nome"    
            />
            <button onClick={toggleStatus}>Alterar status</button>
           
        </div>
    )
}