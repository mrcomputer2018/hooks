import React, { useState, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num) {
    const n = parseInt(num)
    if (n < 0 ) {
        return -1
    }
    if (n  === 0) {
        return 1
    }
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if(fatorial > 1000000) {
            setFatorial(" Eita!!!") 
        }
    }, [fatorial])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #03"/>
            <div className="center">
                {/* Envolver numa DIV para exibir na mesma linha */}
                <div>
                    <span className="text">Fatorial :</span>
                    <span className="text red">
                        { fatorial === -1 ? " Não existe!!!" : fatorial }
                    </span>
                </div>
            
                <input 
                    type="number" 
                    className="input" 
                    value={ number }
                    onChange={(event) => setNumber(event.target.value)}
                />
            </div>
            
        </div>

    )
}

export default UseEffect
