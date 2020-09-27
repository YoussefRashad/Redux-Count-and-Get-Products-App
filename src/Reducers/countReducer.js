
import { DECREACE, INCREASE, RESET}  from '../Actions/ActionsTypes'

const defaultState= {
    count :0,
    name: 'Youssef'
}

const reducer = (state = defaultState, action)=>{
    switch(action.type){
        case INCREASE:
            return {...state, count: ++state.count }
        case DECREACE:
            return {...state, count: --state.count }
        case RESET:
            return {...state, count: 0 }
        default:
            return state
    }
}

export default reducer;