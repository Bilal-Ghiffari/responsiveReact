import React, {createContext, useContext, useReducer} from 'react';

const context = createContext();

const initialState = {
    cart: {
        
    }
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
            return {
                ...state,
                cart: state.cart
                ? {
                    ...state.cart,
                    [action.item.id]: action.item,
                }
                : {
                    [action.item.id]: action.item
                }
                
            };
    
        default: {
            throw new Error(`Unhandled action type ${action.type}`)
        }
    }
}


export default function Provider(props){
    const [state, dispatch] = useReducer(Reducer, initialState);
    return <context.Provider value={[state, dispatch]} {...props} />
}


