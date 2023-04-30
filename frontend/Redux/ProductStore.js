const { configureStore } = require("@reduxjs/toolkit");
const { default: ProductSlice } = require("./ProductSlice");

const store = configureStore({
    reducer:{
        cart: ProductSlice,
    },
})

export default store