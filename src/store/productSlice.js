import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { StatusCode } from '../utils/errorCode';


const initialState = {
    data: [],
    status: StatusCode.Idle
};
const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        fetchProduct(state,action) {
            state.data = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getProducts.pending, (state,action) => {
            state.status = StatusCode.Loading
        })
        .addCase(getProducts.fulfilled, (state,action) => {
            state.data = action.payload
            state.status = StatusCode.Idle

        })
        .addCase(getProducts.rejected, (state,action) => {
            state.status = StatusCode.Error
        })
    }
});

export const { fetchProduct } = productSlice.actions;
export default productSlice.reducer;

export const getProducts = createAsyncThunk('products/get', async () => {
    const data = await fetch("https://fakestoreapi.com/products")
        const result = await data.json();
        return result
})
// export function getProducts() {
//     return async function getProductsThunk(dispatch, getState){
//         const data = await fetch("https://fakestoreapi.com/products")
//         const result = await data.json();
//         dispatch(fetchProduct(result))
//     }
// }