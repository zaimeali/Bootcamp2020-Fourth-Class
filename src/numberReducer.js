// using for accessibility and can add multiple update value/actions
// Manage whole application state

const numberReducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
}

// It returns new value
export default numberReducer;