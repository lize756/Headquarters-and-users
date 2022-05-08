import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CreateHeadquarter from "../../components/headquarters/Create";
import UpdateHeadquarter from "../../components/headquarters/Update";
import CreateUser from "../../components/users/Create";
import UpdateUser from "../../components/users/Update";

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

        <Route path="/home" element={<Home />}>
          <Route path="updateuser" element={<UpdateUser />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainHeadquarters;
