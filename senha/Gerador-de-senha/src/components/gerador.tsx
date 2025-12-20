import "./gerador.css"
import { useState } from "react"
import {Input} from "./Input"

export interface PasswordSize {
    passwordSize: number,
    setPasswordSize: number;
}

export function Gerador(){
    const [password, setPassword] = useState("")
    const [copyText, setCopyText] = useState("Copiar")
    const [passwordSize, setPasswordSize] = useState(12);
    const [showInput, setShowInput] = useState(false)

    function generate() {
        const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
        let newPassword = ""
        for (let i = 0; i < passwordSize; i++) {
            const position = Math.floor(Math.random() * characters.length)
            newPassword += characters[position]
        }
        setPassword(newPassword)
        setCopyText("Copiar")
    }

    function copyToClipboard() {
        window.navigator.clipboard.writeText(password)
        setCopyText("Copiado!")
    }

    return(
        <div>
            <h1>Gerador de senhas</h1>
            <div>
                <label htmlFor="showInput">Customizar tamanho:</label>
                <input
                    type="checkbox"
                    id="showInput"
                    value={showInput}
                    onChange={() => setShowInput(currentState => !currentState)}
                ></input>
            </div>
            <div>
                <label htmlFor="passwordSize">Tamanho:</label>
               <Input passwordSize={passwordSize} setPasswordSize={setPasswordSize}/>
            </div>
            <button onClick={generate}>Gerar senha de {passwordSize} caracteres!</button>
            <button onClick={copyToClipboard} disabled={!password}>{copyText}</button>
            <div>{password || "Gere a senha!"}</div>
        </div>
    )
}