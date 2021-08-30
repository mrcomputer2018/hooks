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
    //* EX01
    const [number, setNumber] = useState(1)
    const [fatorial, setFatorial] = useState(1)

    //* Mudando o estado(valor) conforme muda oo input
    //* Um estado que modifica outro estado(EX. number com fatorial)
    useEffect(function() {
        setFatorial(calcFatorial(number))
    }, [number])

    useEffect(function(){
        if(fatorial > 1000000) {
            setFatorial(" Eita!!!") 
        }
    }, [fatorial])

    //* Ex02
    const [status, setStatus] = useState("Impar")

    useEffect(function(){
        setStatus(number % 2 === 0 ? "Par" : "Impar")
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercicio #01"/>
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

            <SectionTitle title="Exercicio #02"/>
            <div className="center">
                <div>
                    <label htmlFor="" className="text">Status: </label>
                    <span className="text red">{ status }</span>
                </div>
                <input 
                        type="number" 
                        className="input"
                        value={ status }
                        onChange={ event => setStatus(event.target.value) }
                />
            </div>
        </div>

    )
}

export default UseEffect
