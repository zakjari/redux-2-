import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "tasks",
  initialState: {
    list: [],
    filter: "all",
  },
  reducers: {
    addTask: (state, action) => {
      state.list.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleComplete: (state, action) => {
      const task = state.list.find((task) => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    deleteTask: (state, action) => {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addTask, toggleComplete, deleteTask, setFilter } =
  themeSlice.actions;
export default themeSlice.reducer;
