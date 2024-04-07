import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cardReducer from "../Features/slices";
import basketReducer from "../Features/actionCreators/basketSlices";

const rootReducer = combineReducers({
  cash: cardReducer,
  basket: basketReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type rooState = ReturnType<typeof rootReducer>;
type AppStoge = ReturnType<typeof setupStore>;
export type AppDispatch = AppStoge["dispatch"];
