import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface MyKnownError {
  message: string;
  success: boolean;
}

interface RegisterDataFromServerType {
  success?: boolean;
  message?: string;
  error?: any;
}

interface RegisterDataToSubmit {
  email: string;
  password: string;
}

export const registerUser = createAsyncThunk<
  RegisterDataFromServerType,
  RegisterDataToSubmit,
  { rejectValue: MyKnownError }
>("users/registerUser", async (registerInfo, thunkAPI) => {
  try {
    // success 객체가 들어올 것으로 예상됨.
    const { data } = await axios.post("/api/users/register", registerInfo);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "API 통신 실패",
      success: false,
    });
  }
});

export interface InitailStateType {
  // userData: object;
  userData: RegisterDataFromServerType;
  error: null | MyKnownError | undefined;
  loading: boolean;
}

const initialState: InitailStateType = {
  userData: {},
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // registerUser: (state, action: PayloadAction<object>) => {
    //   return state;
    // },
  },
  extraReducers: (builder) => {
    builder
      // 통신 중
      .addCase(registerUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      // 통신 성공
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.userData = payload;
      })
      // 통신 에러
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
