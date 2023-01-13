// interface Item {
//     title: string;
//     restaurantName: string;
//     checkboxValue: boolean;
// }

// interface CartState {
//     selectedItems: {
//         items: Item[],
//         restaurantName: string
//     }
// }

// const defaultState: CartState = {
//     selectedItems: { items: [], restaurantName: '' },
// }

// const cartReducer = (state = defaultState, action: any) => {
//     switch (action.type) {
//         case "ADD_TO_CART": {
//             // let newState = { ...state };
//             const newState = {...state}

//             if (action.payload.checkboxValue) {
//                 console.log("ADD TO CART");
//                 // const newState: CartState = { ...state };
//                 newState.selectedItems = {
//                 items: [...newState.selectedItems.items, action.payload],
//                 restaurantName: action.payload.restaurantName,
//                 };
//             } else {
//                 console.log("REMOVE FROM CART");
//                 newState.selectedItems = {
//                     items: [
//                         ...newState.selectedItems.items.filter(
//                             (item: Item) => item.title !== action.payload.title
//                             ),
//                         ],
//                         restaurantName: action.payload.restaurantName,
//                     };
//                 }
//                 console.log(newState, "Let's gooooo⚡");
                
//                 return newState;
//             }
        
//             default:
//             return state;
//         }
// }


// export default {
//     // defaultState,
//     cartReducer,
// }


interface Item {
    title: string;
    restaurantName: string;
    checkboxValue: boolean;
}

interface CartState {
    selectedItems: {
        items: Item[],
        restaurantName: string
    }
}

const defaultState: CartState = {
    selectedItems: { items: [], restaurantName: '' },
}

const cartReducer = (state = defaultState, action: any) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const newState = {...state}

            if (action.payload.checkboxValue) {
                console.log("ADD TO CART");
                newState.selectedItems = {
                items: [...newState.selectedItems.items, action.payload],
                restaurantName: action.payload.restaurantName,
                };
            } else {
                console.log("REMOVE FROM CART");
                newState.selectedItems = {
                    items: [
                        ...newState.selectedItems.items.filter(
                            (item: Item) => item.title !== action.payload.title
                            ),
                        ],
                        restaurantName: action.payload.restaurantName,
                    };
                }
                console.log(newState, "Let's gooooo⚡");
                
                return newState;
            }
        
            default:
            return state;
        }
}


export default {
    cartReducer,
}
