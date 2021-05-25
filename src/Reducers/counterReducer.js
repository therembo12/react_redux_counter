const initialState = {
    counter: 0
}

const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS":
            return {
                counter: state.counter += 1
            }
        case "MINUS":
            return {
                counter:state.counter - 1
            }
        case 'DIV':
            return{
            counter:state.counter/2
        }
        case 'MULL':
            return{
            counter:state.counter*2
        }

        default:
            return state;
    }
}

export default CounterReducer;