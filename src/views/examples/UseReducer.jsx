import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

import { initialState, reducer } from "../../store/config"
import { numberAdd2, login } from "../../store/actions"

const UseReducer = (props) => {
    //* no hooks passo a funcao reducar e estado inical como parametro
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                { state.user ? 
                    <span className="text">{ state.user.name }</span> : 
                    <span className="text">Sem usuario</span> }

                <span className="text">{ state.number }</span>
                <div>
                    <button className="btn"
                        onClick={ () => login(dispatch, "Marcelo Ribeiro") }>Login</button>
                    <button className="btn" 
                        onClick={ () => numberAdd2(dispatch) }>+2</button>
                    <button className="btn" 
                        onClick={() => dispatch({ type: "numberMulti7" })}>x7</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: "numberDiv25" })}>/25</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: "numberInt" })}>Parse</button>
                    <button className="btn"
                        onClick={() => dispatch({ type: "numberAddN", payload: -9})}>-9</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
