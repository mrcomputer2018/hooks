//* Contador encapsulado
import { useState } from "react";

//* Se initialvalue nao foor passado inicio coom valor 100
const useCounter = (initialvalue = 100) => {
    const [count, setCount ] = useState(initialvalue)

    function inc () {
        setCount(count + 1)
    }

    function dec () {
        setCount(count - 1)
    }

    return [count, inc, dec]
}

export {
    useCounter
}
