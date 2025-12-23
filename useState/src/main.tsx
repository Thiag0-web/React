import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "@/assets/styles/estilo.css"; // Importação do arquivo de estilo


createRoot(document.getElementById('root')!).render(
    <App />
)
