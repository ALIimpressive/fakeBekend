import React from "react";
import ProductHome from "../components/Product/ProductHome";
import Admin from "../components/Admin/Admin";
import { Route, Routes } from "react-router-dom";

interface Props {
  link: string;
  element: React.ReactNode;
  id: number;
}

function MainRoutes() {
  const PUBLIC: Props[] = [
    { link: "/", element: <ProductHome />, id: 1 },
    { link: "/admin", element: <Admin />, id: 2 },
  ];

  return (
    <Routes>
      {PUBLIC.map((el) => (
        <Route path={el.link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
}

export default MainRoutes;
