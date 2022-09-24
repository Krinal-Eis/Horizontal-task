
export const addToCart = (product) => (dispatch) => {
    dispatch({
        type: "add_to_cart",
        payload: product
    })
}

export const increaseCartQnt = (product) => (dispatch) => {
    dispatch({
        type: "INCREASE_QUANTITY",
        payload: product
    })
} 

export const decreaseCartQnt = (product) => (dispatch) => {
    dispatch({
        type: "DECREASE_QUANTITY",
        payload: product
    })
} 

export const removeCart = (product) => (dispatch) => {
    dispatch({
        type: "DELETE_CART",
        payload: product
    })
} 