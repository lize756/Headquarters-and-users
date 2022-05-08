import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import CreateHeadquarter from "../../components/headquarters/Create";
import UpdateHeadquarter from "../../components/headquarters/Update";
import CreateUser from "../../components/users/Create";
import UpdateUser from "../../components/users/Update";
import ListUser from "../../components/search/ListUser";
import SignInSide from "../../components/login/SignInSide";
import firebaseApp from "../../credentiales";
import {getAuth,onAuthStateChanged} from "firebase/auth"


const auth = getAuth(firebaseApp)

const MainHeadquarters = () => {



  const [getGlobalUser, setGlobarUser] = useState(null);


  onAuthStateChanged(auth,(isExistfiberaseUser)=>{
    if(isExistfiberaseUser){
      // Session is started
      setGlobarUser(isExistfiberaseUser)
    }else{
      // Session is not started
      setGlobarUser(null)
    }
  })

  

  
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

        <Route path="/login" element={<SignInSide/>} />
      </Routes>
    </>
  );
};

export default MainHeadquarters;
