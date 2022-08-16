import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import likeReducer from "./likeSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    like: likeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
