import { createSlice, nanoid, current } from "@reduxjs/toolkit";

const initialState = {
  noOfProductInCart: 0,
  cartProduct: [],
};
const data = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  rating: { rate: 3.9, count: 120 },
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    incrementCart: (state) => {
      state.noOfProductInCart++;
    },
    decrementCart: (state) => {
      if (state.noOfProductInCart > 0) state.noOfProductInCart--;
    },
    addCartProduct: (state, actions) => {
      let found = false;
      state.cartProduct.map((item, index) => {
        if (item.id == actions.payload.id) {
          item.noOfItems++;
          found = true;
          state.cartProduct[index] = item;
        }
      });
      if (!found) {
        let data = {
          noOfItems: 1,
          ...actions.payload,
        };
        state.cartProduct.push(data);
      }
    },
    decrementCartProduct: (state, actions) => {
      state.cartProduct.map((item, index) => {
        if (item.id == actions.payload.id) {
          if (item.noOfItems > 1) {
            item.noOfItems--;
            state.cartProduct[index] = item;
          } else {
            state.cartProduct.splice(index, 1);
          }
        }
      });
    },
  },
});

export const {
  incrementCart,
  decrementCart,
  addCartProduct,
  decrementCartProduct,
} = cartSlice.actions;
export default cartSlice.reducer;
