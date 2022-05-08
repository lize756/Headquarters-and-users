import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CreateHeadquarter from "../../components/headquarters/Create";
import UpdateHeadquarter from "../../components/headquarters/Update";
import CreateUser from "../../components/users/Create";

const MainHeadquarters = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="createhead" element={<CreateHeadquarter />} />
        </Route>

        <Route path="/home" element={<Home />}>
          <Route path="updatehead" element={<UpdateHeadquarter />} />
        </Route>

        <Route path="/home" element={<Home />}>
          <Route path="createuser" element={<CreateUser />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainHeadquarters;
