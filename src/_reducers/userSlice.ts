import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://ki0ent.herokuapp.com",
});

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
    // const { data } = await axios.post("/api/users/register", registerInfo);
    const { data } = await instance.post("/api/users/register", registerInfo, {
      withCredentials: true,
    });
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
  email?: string;
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
    // const { data } = await axios.post("/api/users/login", loginInfo);
    const { data } = await instance.post("/api/users/login", loginInfo, {
      withCredentials: true,
    });
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
  authSuccess?: boolean;
  message?: string;
  error?: any;
  isAuth?: boolean;
  email?: string;
  isAdmin?: boolean;
}

export const authUser = createAsyncThunk<
  AuthDataFromServerType,
  null,
  { rejectValue: MyKnownErrorAuth }
>("users/authUser", async (authData, thunkAPI) => {
  try {
    // const { data } = await axios.get("/api/users/auth");
    const { data } = await instance.get("/api/users/auth", {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "인증 API 통신 실패",
      authSuccess: false,
    });
  }
});

// 로그아웃
interface MyKnownErrorLogout {
  message: string;
  logoutSuccess: boolean;
}

interface LogoutDataFromServerType {
  logoutSuccess: boolean;
  message?: string;
  error?: any;
}

export const logoutUser = createAsyncThunk<
  LogoutDataFromServerType,
  null,
  { rejectValue: MyKnownErrorLogout }
>("users/logoutUser", async (logoutData, thunkAPI) => {
  try {
    // const { data } = await axios.get("/api/users/logout");
    const { data } = await instance.get("/api/users/logout", {
      withCredentials: true,
    });
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "로그아웃 API 통신 실패",
      logoutSuccess: false,
    });
  }
});

// slice
export interface InitailStateType {
  userData: any;
  authData: any;
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
  authData: {},
  error: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
        state.authData = payload;
      })
      .addCase(authUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });

    // 로그아웃 builder
    builder
      .addCase(logoutUser.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.userData = payload;
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
