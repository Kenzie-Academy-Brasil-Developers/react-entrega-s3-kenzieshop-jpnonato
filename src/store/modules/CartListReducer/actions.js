export const addToCart = (product) => ({
    type: '@addCart',
    payload: product,
    id: product.id
})

export const removeToCart = (list) => ({
    type: '@removeCart',
    payload: list,
})


