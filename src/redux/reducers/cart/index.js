const initialState = {
    cart: [],
}

const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case "add_to_cart":
      if(state.cart.length === 0){
        let itemCart = {
            id:payload.id,
            quantity: payload.quantity,
            product_title:payload.product_title,
            image:payload.image,
            Price:payload.Price,
            description: payload.description
        } 
        state.cart.push(itemCart); 
    }
    else{
        let check = false;
        state.cart.map((item,key)=>{
            if(item.id === payload.id){
                state.cart[key].quantity = state.cart[key].quantity + payload.quantity
                check=true;
            }
        });
        if(!check){
            let _cart = {
                id:payload.id,
                quantity: payload.quantity,
                product_title:payload.product_title,
                image:payload.image,
                Price:payload.Price,
                description: payload.description
            }
            state.cart.push(_cart);
        }
    }
    return{
        ...state,
    }
        
    case "INCREASE_QUANTITY":
        let filterCart = 
        state.cart.map(item => {
          if(item.id === payload.id){
              item.quantity++
          }
          return item
        })
        return {...state, cart: filterCart}

    case "DECREASE_QUANTITY":
        let filterDecCart = 
        state.cart.map(item => {
      if(item.id === payload.id){
        if(item.quantity > 1){
          item.quantity-- 
        }
      }
      return item
    })
    return {...state, cart: filterDecCart}
    case "DELETE_CART":
        return{
            ...state,
            cart:state.cart.filter(item=>{
                return item.id !== payload.id
            })
            
        }
  default:
    return state
  }
}

export default cartReducer;