import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Iphotos } from "../types/typest";

interface InitialState {
  card: Iphotos[];
  loader: boolean;
  error: string;
  limit: number;
  page: number;
}

const initialState: InitialState = {
  card: [],
  loader: false,
  error: "",
  limit: 4,
  page: 1,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    photosFetching: (state) => {
      state.loader = true;
    },
    photosFetchingSuccsess: (state, action: PayloadAction<Iphotos[]>) => {
      state.error = "";
      state.card = action.payload;
      state.loader = false;
    },
    photosFetchingError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setPhotosPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { photosFetching, photosFetchingSuccsess, photosFetchingError } =
  cardSlice.actions;
export default cardSlice.reducer;
