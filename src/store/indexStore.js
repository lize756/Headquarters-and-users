// Represent the index to store of all application
import { configureStore } from "@reduxjs/toolkit";



//Slice
import FirebaseSlice from "./FirebaseSlice";
/**
 * Store of all application
 */
export default configureStore({
  reducer: {
    FirebaseSlice
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  
});
