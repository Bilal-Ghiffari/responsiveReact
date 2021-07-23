import React, {createContext, useContext, useReducer} from 'react';

const context = createContext();

const initialState = {
    cart: {}
}

export function useGlobalContext() {
    const [state, dispatch] = useContext(context);
    if (!state || !dispatch) {
        throw new Error("useGlobalContext must be used within a provider")
    }
    return {state, dispatch};
}


function Reducer(state, action) {
    switch (action.type) {
        case "ADD_TO_CART" :
            // console.log(action.item.id)
            // console.log(action.item)
            console.log(state.cart)
            return {
                ...state,
                cart: state.cart
                ? {
                    ...state.cart,
                    [action.item.id]: action.item,
                }
                : {
                    [action.item.id]: action.item,
                }
            };

            case "REMOVE_FROM_CART" :
            return {
                ...state,
                cart: Object.keys(state.cart).filter(key => +key !== +action.id).reduce((acc, key) => {
                    const item = state.cart[key]
                    acc[item.id] = item;
                    return acc;
                },{})
            };

            case "RESET_CART" : 
            return {
                ...state,
                cart: initialState.cart
            }


        default: {
            throw new Error(`Unhandled action type ${action.type}`)
        }
    }
}


export default function Provider(props){
    const [state, dispatch] = useReducer(Reducer, initialState);
    return <context.Provider value={[state, dispatch]} {...props} />
}


