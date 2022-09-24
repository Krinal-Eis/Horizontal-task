export const setProducts = (data) => {
    return {
        type: "SET_PRODUCTS_LIST",
        payload: data
    }
}

export const getProducts = (data) => (dispatch) => {
    dispatch(setProducts(data))
}

export const increaseProductQnt = (product) => (dispatch) => {
    dispatch({
        type: "increase_qnt",
        payload: product
    })
} 

export const decreaseProductQnt = (product) => (dispatch) => {
    dispatch({
        type: "decrease_qnt",
        payload: product
    })
} 

