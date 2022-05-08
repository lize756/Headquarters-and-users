import { createSlice } from "@reduxjs/toolkit";

/**
 * This slice containt all related with the state of application.
 */
export const FirebaseSlice = createSlice({
  name: "firebaseSlice",
  initialState: {
     userFirebase: {},
     arrayHeadquarters:[],
     array_users:[],
     currentHeadquarter:{}
  
  },
  reducers: {
    /**
     * 
     * @param {*} state Corresponds to the initial or current state of the slice
     * @param {*} action Corresponds to the action to be performed on the state of the slice
     */
    setUserFirebase: (state, action) => {
      state.userFirebase = action.payload;
    },

    setArrayHeadquarters: (state, action) =>{
        state.arrayHeadquarters = action.payload;
    },

    setArrayUsers: (state, action) => {
      state.array_users = action.payload;
    },

    setCurrentHeadquarter: (state, action) => {
      state.currentHeadquarter = action.payload;
    },
  
  },
  
});
//Export the action to reducer of firebase
export const { setUserFirebase,setCurrentHeadquarter, setArrayHeadquarters,setArrayUsers} = FirebaseSlice.actions;
export default FirebaseSlice.reducer;