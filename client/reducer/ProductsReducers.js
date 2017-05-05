export default function(state=[], actions){
    switch(actions.type){
        case 'NewProductList':
            return actions.newProductList;
        default:
            return state;
    }
}