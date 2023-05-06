const { createSlice } = require("@reduxjs/toolkit");

const initialState = [];

 const productslice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
       add(state,action){
        state.push(action.payload)
       },
       remove(state, action) {
         return state.filter((element) => element.id !== action.payload.id);
       }
    }
})

export const {add,remove} = productslice.actions;
export default productslice.reducer;