import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CreateHeadquarter from "../../components/headquarters/Create";
import UpdateHeadquarter from "../../components/headquarters/Update";
import CreateUser from "../../components/users/Create";
import UpdateUser from "../../components/users/Update";
import ListUser from "../../components/search/ListUser";
import SignInSide from "../../components/login/SignInSide";
import ListHeadquuarters from "../../components/headquarters/list/ListHeadquarters";
import Details from "../../components/headquarters/information/Details";

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

        <Route path="/home" element={<Home />}>
          <Route path="listuser" element={<ListUser />} />
        </Route>

        <Route path="/home" element={<Home />}>
          <Route path="listhead" element={<ListHeadquuarters />} />
        </Route>

        <Route path="/home" element={<Home />}>
          <Route path="details" element={<Details />} />
        </Route>

        <Route path="/login" element={<SignInSide />} />
      </Routes>
    </>
  );
};

export default MainHeadquarters;
