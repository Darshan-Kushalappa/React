export default function(state=[], action){
    switch(action.type)
    {
        case 'AddProductToTrolley':
            for (let productIndex = 0; productIndex <  state.length; productIndex++){
                if (action.productId === state[productIndex]){
                    return state;
                }
            }
            let newState = [...state];
            newState.push(action.productId);
            return newState;

        case 'DeleteProductFromTrolley':
            
            for (let productIndex = 0; productIndex <  state.length; productIndex++){
                if (action.productId === state[productIndex]){
                    let newState = [...state];
                    newState.splice(productIndex, 1);
                    return newState;
                }
            }        
            return state;
        default:
            return state;
    }
}