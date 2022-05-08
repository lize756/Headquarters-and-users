import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CreateHeadquarter from "../../components/headquarters/Create";
import UpdateHeadquarter from "../../components/headquarters/Update";
import CreateUser from "../../components/users/Create";
import UpdateUser from "../../components/users/Update";
import ListUser from "../../components/search/ListUser";
import SignInSide from "../../components/login/SignInSide";
import firebaseApp from "../../credentiales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import ListHeadquuarters from "../../components/headquarters/list/ListHeadquarters";
import Details from "../../components/headquarters/information/Details";
//Redux
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setUserFirebase } from "../../store/FirebaseSlice";

const auth = getAuth(firebaseApp);
const MainHeadquarters = () => {
  /**
   * -------------------------------------------------
   * -------------------- REDUX ----------------------
   * -------------------------------------------------
   */
  // Allow to send the elements of store
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (isExistfiberaseUser) => {
      if (isExistfiberaseUser) {
        // Session is started
        dispatch(setUserFirebase(isExistfiberaseUser));
      } else {
        // Session is not started
        dispatch(setUserFirebase({}));
      }
    });
  },[]);

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

        <Route path="/home" element={<Home userEmail />}>
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
