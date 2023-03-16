

const initialState = {
    products:[],
    totalPrice:0,
    totalQuantity:0
}



const cartReducer = (state= initialState, action) =>{
    switch(action.type){

        case  "ADD_TO_CART":
            const {quantity, product}= action.payload;
            const check = state.products.find((item)=>item.id === product.id)
            if(check){
                return state;
            }else{
                const tPrice = state.totalPrice + product.price *quantity;
                const totQty= state.totalQuantity + quantity 
                product.quantity = quantity 
                return {
                    ...state,
                   products:[...state.products, product],
                    totalQuantity: totQty,
                    totalPrice:tPrice
    
                }
            }

        default :
        return state ;
    }
}


export default cartReducer