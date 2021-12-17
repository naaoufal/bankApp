import { actionType } from "../contstants/action-type"

export const setSolde = (solde) => {
    return {
        type : actionType.SET_SOLDE,
        payload : solde
    }
}