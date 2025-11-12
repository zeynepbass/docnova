import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://api-dev.docnova.ai/auth/login/dev",
        credentials,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: false,
        }
      );

      console.log("Companies:", response.data.companies);
      console.log("JWT:", response.data.jwt);

      return {
        user: response.data.user,
        companies: response.data.companies,
        jwt: response.data.jwt, 
      };
    } catch (error) {
      return rejectWithValue(error.response?.data || "Giriş başarısız");
    }
  }
);

const initialState = {
  user: null,
  companies: [],
  jwt: null,  
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.companies = [];
      state.jwt = null;  
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.companies = action.payload.companies;
        state.jwt = action.payload.jwt; 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
