import { porducts } from "../data";

const initialState ={porducts,product:{}};

const productsReducer = (state=initialState, action)=>{

    switch(action.type){
        
        case "PRODUCT_DETAILS" :
        
            return{
                ...state,
                product:state.porducts.find((item)=>item.id === Number(action.id))
            }

        default :
        return state ;


    }


}

export default productsReducer ;
