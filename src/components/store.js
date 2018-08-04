var redux = require('redux');
const ticketInitialState = {}
const allReducer = (state = ticketInitialState, action) => {
    switch (action.type) {
        case "GET_DATA_JS":
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}

var store = redux.createStore(allReducer);

export default store;