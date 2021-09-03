//* Recebe o estado atual e uma acao
export default function reducer(state, action) {
    //* toda acao tem pelo menos o atributo tipo
    switch (action.type) {
        case "numberAdd2":
            return { ...state, number: state.number + 2}
        case "login":
            return { ...state, user: { name: action.payload } }
        case "numberMulti7":
            return { ...state, number: state.number * 7 }
        case "numberDiv25":
            return { ...state, number: state.number / 25 } 
        case "numberInt":
            return {...state, number: parseInt( state.number ) } 
        case "numberAddN":
            return {...state, number: state.number + action.payload}       
        default:
            //* retorna o estado atual
            return state
    }

}