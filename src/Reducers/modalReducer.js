
import { MODAL_OPEN, MODAL_CLOSE } from '../Actions/ActionsTypes'

const defaultState = {
    text: '',
    name: '',
    isOpen: false
}

const reducer = ( state=defaultState, action )=>{
    if(action.type === MODAL_OPEN){
        return { ...state, isOpen: true, text: action.payload.text, name: action.payload.name }
    }
    if(action.type === MODAL_CLOSE){
        return { ...state, isOpen:false, text: '', name: ''}
    }
    return state
}
export default reducer