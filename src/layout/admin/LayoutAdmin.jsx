import React, { useContext } from "react";
import HeaderAdmin from "./HeaderAdmin";
import { Navigate, Outlet } from "react-router-dom";
import { LoginContext } from "../../context/LoginContext";

const LayoutAdmin = () => {
  const { user } = useContext(LoginContext);
  if (user === null) {
    return <Navigate to="/" replace />;
  }
  return (
    <>
      <HeaderAdmin />

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default LayoutAdmin;
