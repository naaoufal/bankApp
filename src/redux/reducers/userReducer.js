import { actionType } from "../contstants/action-type";

const initialState = {
    solde : [{
        value : 2000
    }]
}

export const userReducer = (state, { type, payload }) => {
    switch (type) {
        case actionType.SET_SOLDE:
            return state
        default:
            return state;
    }
}