const initialValue = []

const list = JSON.parse(localStorage.getItem('cart')) || initialValue

export default function CartListReducer(state = list, action){

    switch (action.type) {
        case "@addCart":
            const item = action.payload
            const newId = Math.random() * (10000 - 4) + 4
           
            return[...state, {
                ...item,
                id: newId
            }];

        case "@removeCart":
            const selectedList = action.payload
            
            return selectedList;    
    
        default:
            return state;
    }

}