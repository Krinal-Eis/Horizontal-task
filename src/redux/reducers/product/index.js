const initialState = {
  products: null,
}

const productsReducer = (state = initialState, action) => {
switch (action.type) {

case "SET_PRODUCTS_LIST":
  return { ...state, products: action.payload }
case "increase_qnt":
  let filterProduct = 
  state.products.map(item => {
    if(item.id === action.payload.id){
        item.quantity = item.quantity + 1
    }
    return item
  })
  return {...state, products: filterProduct}
case "decrease_qnt":
  let filterDecProduct = 
  state.products.map(item => {
    if(item.id === action.payload.id){
      if(item.quantity > 1){
        item.quantity = item.quantity - 1
      }
    }
    return item
  })
  return {...state, products: filterDecProduct}
default:
  return state
}
}

export default productsReducer;