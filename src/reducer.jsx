export const initialState = {
    basket: [],
}

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':

            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_TO_BASKET':

        const newBasket = [...state.basket]

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
        console.log(state.basket)
        console.log(newBasket)
        console.log(index)
        
        
        newBasket.splice(index,1)
            return {
                ...state,
                basket : newBasket,
            };
        default:
            return state;
    }
}

export default reducer;