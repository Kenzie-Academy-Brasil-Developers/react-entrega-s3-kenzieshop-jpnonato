export const addToCart = (product) => ({
    type: '@addCart',
    payload: product
})

export const removeToCart = (list) => ({
    type: '@removeCart',
    payload: list
})


