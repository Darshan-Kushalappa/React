export function addProductToTrolley(productId){
    return {
        type: 'AddProductToTrolley',
        productId: productId
    }
}

export function removeProductFromTrolley(productId){
    return {
        type: 'DeleteProductFromTrolley',
        productId: productId
    }
}