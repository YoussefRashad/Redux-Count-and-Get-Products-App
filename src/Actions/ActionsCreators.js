import { DECREACE, INCREASE, RESET, MODAL_OPEN, MODAL_CLOSE, LOADING, GET_PRODUCT }  from './ActionsTypes'

// Count Action Creators
export const increase = ()=> {
    return { type: INCREASE }
}
export const decrease = ()=> {
    return { type: DECREACE }
} 
export const reset    = ()=> {
    return { type: RESET };
}

// Modal Action Creators
export const modelOpen = (name, text)=>{
    return { type: MODAL_OPEN, payload: { text, name } }
}
export const modelClose = ()=>{
    return { type: MODAL_CLOSE }
}

// Product Action Creators
export const setLoading = ()=>{
    return { type: LOADING }
}

export const getProducts = ()=>{
    return async function(dispatch){
        dispatch(setLoading())
        const response = await fetch("https://johnsmilgatutorials.com/projects/react-tech-store-v2/products")
        const data = await response.json()
        dispatch({type: GET_PRODUCT, payload: data})
    }
}