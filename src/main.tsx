import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes.tsx";
import ProductPage from "./Pages/ProductPage.tsx";
import { Provider } from "react-redux";
import { setupStore } from "./Storegs/store.ts";

const store = setupStore();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <ProductPage />
      <MainRoutes />
    </Provider>
  </BrowserRouter>
);
