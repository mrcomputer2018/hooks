import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const initialState = {
    other: "...",
    cart: [],
    prooducts: [],
    user: null, 
    // Foco
    number: 0,
}
//* Recebe o estado atual e uma acao
function reducer(state, action) {
    //* toda acao tem pelo menos o atributo tipo
    switch (action.type) {
        case "number_add2":
            return {...state, number: state.number + 2}
        case "login":
            return {...state, user: { name: action.payload } }     
        default:
            //* retorna o estado atual
            return state
    }

}

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
                        onClick={() => dispatch({ type: "login", payload: "Maria" })}>Login</button>
                    <buttoon className="btn" 
                        onClick={() => dispatch({ type: "number_add2" })}>+2</buttoon>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
