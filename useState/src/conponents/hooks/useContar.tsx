import { useState } from "react";

export function useContar() {
    const [count, setCount] = useState(0)
    
    const increment = () => {
        setCount(count + (1))
    }

    return { count, increment }
}