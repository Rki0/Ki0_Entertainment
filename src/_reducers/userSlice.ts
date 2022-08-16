import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// 회원가입
interface MyKnownErrorRegister {
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
  { rejectValue: MyKnownErrorRegister }
>("users/registerUser", async (registerInfo, thunkAPI) => {
  try {
    // success 객체가 들어올 것으로 예상됨.
    const { data } = await axios.post("/api/users/register", registerInfo);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "회원가입 API 통신 실패",
      success: false,
    });
  }
});

// 로그인
interface MyKnownErrorLogin {
  message: string;
  loginSuccess: boolean;
}

interface LoginDataFromServerType {
  loginSuccess?: boolean;
  message?: string;
  error?: any;
}

interface LoginDataToSubmit {
  email: string;
  password: string;
}

export const loginUser = createAsyncThunk<
  LoginDataFromServerType,
  LoginDataToSubmit,
  { rejectValue: MyKnownErrorLogin }
>("users/loginUser", async (loginInfo, thunkAPI) => {
  try {
    const { data } = await axios.post("/api/users/login", loginInfo);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "로그인 API 통신 실패",
      loginSuccess: false,
    });
  }
});

// 인증
interface MyKnownErrorAuth {
  message: string;
  authSuccess: boolean;
  isAuth?: boolean;
  isAdmin?: boolean;
}

interface AuthDataFromServerType {
  authSuccess: boolean;
  message?: string;
  error?: any;
  isAuth: boolean;
  email: string;
  isAdmin: boolean;
}

export const authUser = createAsyncThunk<
  AuthDataFromServerType,
  null,
  { rejectValue: MyKnownErrorAuth }
>("users/authUser", async (authData, thunkAPI) => {
  try {
    const { data } = await axios.get("/api/users/auth");
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "인증 API 통신 실패",
      authSuccess: false,
    });
  }
});

// slice
export interface InitailStateType {
  // userData: object;
  userData: RegisterDataFromServerType;
  error:
    | null
    | unknown
    | undefined
    | MyKnownErrorRegister
    | MyKnownErrorLogin
    | MyKnownErrorAuth;
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
    // 회원가입 builder
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

    // 로그인 builder
    builder
      .addCase(loginUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.userData = payload;
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });

    // 인증 builder
    builder
      .addCase(authUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(authUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.userData = payload;
      })
      .addCase(authUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
