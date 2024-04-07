import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Iphotos } from "../../types/typest";

interface IInitial {
  basket: Iphotos[];
  quantity: number;
}

const initialState: IInitial = {
  basket: [],
  quantity: 1,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Iphotos>) => {
      const foundPhotos = state.basket.find(
        (el: Iphotos) => el.id === action.payload.id
      );
      if (foundPhotos) {
        state.quantity++;
      } else {
        state.basket.push({
          userId: action.payload.userId,
          id: action.payload.id,
          title: action.payload.title,
          quantity: 1,
        });
      }
    },
  },
});

export default basketSlice.reducer