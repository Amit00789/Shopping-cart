import { createSlice} from '@reduxjs/toolkit'

const initialState = [];
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
            //state.pop(action.payload)
            return state.filter(item => item.id !== action.payload)
        },
        empty(state, action){
            return initialState;
        }

    }
})

export const { add, remove, empty } = cartSlice.actions;
export default cartSlice.reducer;