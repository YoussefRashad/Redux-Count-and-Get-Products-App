
import { LOADING, GET_PRODUCT } from '../Actions/ActionsTypes'

const defaultState = {
    loading: false,
    products: []
}

const reducer = (state=defaultState, action)=>{
    if(action.type === LOADING){
        return { ...state, loading: true, products:[] }
    }
    if(action.type === GET_PRODUCT){
        return { ...state, loading: false, products: action.payload }
    }
    return state
}
export default reducer