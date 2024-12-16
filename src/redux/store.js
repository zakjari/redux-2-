import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./themeSlice";
const store = configureStore({
  reducer: {
    tasks: tasksReducer, // Combine les reducers (ici, il n'y en a qu'un)
  },
});
export default store;
