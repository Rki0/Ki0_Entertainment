import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

// 관심 아티스트 추가
interface MyKnownErrorLike {
  message: string;
  addLikeSuccess: boolean;
}

interface LikeDataFromServerType {
  addLikeSuccess?: boolean;
  email?: string;
  message?: string;
  error?: any;
}

interface LikeDataToSubmit {
  email: string;
  src: string;
  name: string;
}

export const addLikeArtist = createAsyncThunk<
  LikeDataFromServerType,
  LikeDataToSubmit,
  { rejectValue: MyKnownErrorLike }
>("users/addLikeArtist", async (likeInfo, thunkAPI) => {
  try {
    const { data } = await axios.post("/api/users/like", likeInfo);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "관심 아티스트 추가 API 통신 실패",
      addLikeSuccess: false,
    });
  }
});

// 관심 아티스트 불러오기
interface MyKnownErrorLoadLike {
  message: string;
  loadLikeSuccess: boolean;
  myLike?: any;
}

interface LoadLikeDataFromServerType {
  loadLikeSuccess?: boolean;
  myLike: any;
  error?: any;
}

interface LoadLikeDataToSubmit {
  email: string;
}

export const loadLikeArtist = createAsyncThunk<
  LoadLikeDataFromServerType,
  LoadLikeDataToSubmit,
  { rejectValue: MyKnownErrorLoadLike }
>("users/loadLikeArtist", async (loadLikeInfo, thunkAPI) => {
  try {
    const { data } = await axios.post("/api/users/loadlike", loadLikeInfo);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "관심 아티스트 불러오기 API 통신 실패",
      loadLikeSuccess: false,
    });
  }
});

// 관심 아티스트 해제하기
interface MyKnownErrorDeleteLike {
  message: string;
  deleteLikeSuccess: boolean;
}

interface DeleteLikeDataFromServerType {
  deleteLikeSuccess?: boolean;
  error?: any;
}

interface DeleteLikeDataToSubmit {
  email: string;
  name: string;
}

export const deleteLikeArtist = createAsyncThunk<
  DeleteLikeDataFromServerType,
  DeleteLikeDataToSubmit,
  { rejectValue: MyKnownErrorDeleteLike }
>("users/deleteLikeArtist", async (deleteLikeInfo, thunkAPI) => {
  try {
    const { data } = await axios.post("/api/users/deletelike", deleteLikeInfo);
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue({
      message: "관심 아티스트 해제하기 API 통신 실패",
      deleteLikeSuccess: false,
    });
  }
});

// slice
export interface InitailStateType {
  likeData: any;
  error:
    | null
    | unknown
    | undefined
    | MyKnownErrorLike
    | MyKnownErrorLoadLike
    | MyKnownErrorDeleteLike;
  loading: boolean;
}

const initialState: InitailStateType = {
  likeData: {},
  error: null,
  loading: false,
};

export const likeSlice = createSlice({
  name: "like",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 관심 아티스트 추가 builder
    builder
      // 통신 중
      .addCase(addLikeArtist.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      // 통신 성공
      .addCase(addLikeArtist.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.likeData = payload;
      })
      // 통신 에러
      .addCase(addLikeArtist.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });

    // 관심 아티스트 불러오기 builder
    builder
      // 통신 중
      .addCase(loadLikeArtist.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      // 통신 성공
      .addCase(loadLikeArtist.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.likeData = payload;
      })
      // 통신 에러
      .addCase(loadLikeArtist.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });

    // 관심 아티스트 해제하기 builder
    builder
      // 통신 중
      .addCase(deleteLikeArtist.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      // 통신 성공
      .addCase(deleteLikeArtist.fulfilled, (state, { payload }) => {
        state.error = null;
        state.loading = false;
        state.likeData = payload;
      })
      // 통신 에러
      .addCase(deleteLikeArtist.rejected, (state, { payload }) => {
        state.error = payload;
        state.loading = false;
      });
  },
});

// export const { deleteLikeList } = likeSlice.actions;
export const {} = likeSlice.actions;

export default likeSlice.reducer;
