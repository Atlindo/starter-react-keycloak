import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AUTH_ACC_TOKEN, AUTH_ID_TOKEN, AUTH_REFRESH_TOKEN, AUTH_STORAGE } from 'constants/AuthConstant';
import AuthService from 'services/AuthService';
import ApiService from '../../services/api.service';

export const initialState = {
  loading: false,
  message: '',
  showMessage: false,
  redirect: '',
  token: localStorage.getItem(AUTH_ACC_TOKEN) || null,
  isAuth: false,
  user: null,
};

export const signIn = createAsyncThunk('auth/login', async (data, { rejectWithValue }) => {
  const { email, password } = data;
  try {
    const response = await AuthService.login({ email, password });
    const { token } = response.data;
    localStorage.setItem(AUTH_ACC_TOKEN, token);
    return token;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export const signUp = createAsyncThunk('auth/register', async (data, { rejectWithValue }) => {
  const { email, password } = data;
  try {
    const response = await AuthService.register({ email, password });
    const { token } = response.data;
    localStorage.setItem(AUTH_ACC_TOKEN, token);
    return token;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export const signOut = createAsyncThunk('auth/logout', async () => {
  const response = await new ApiService({
    url: '/api/v1/auth/logout',
  }).delete();
  localStorage.removeItem(AUTH_ACC_TOKEN);
  localStorage.removeItem(AUTH_ID_TOKEN);
  localStorage.removeItem(AUTH_REFRESH_TOKEN);
  localStorage.removeItem(AUTH_STORAGE);
  return response?.data;
});

export const signInWithGoogle = createAsyncThunk('auth/signInWithGoogle', async (_, { rejectWithValue }) => {
  try {
    const response = await AuthService.loginInOAuth();
    const { token } = response.data;
    localStorage.setItem(AUTH_ACC_TOKEN, token);
    return token;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export const signInWithFacebook = createAsyncThunk('auth/signInWithFacebook', async (_, { rejectWithValue }) => {
  try {
    const response = await AuthService.loginInOAuth();
    const { token } = response.data;
    localStorage.setItem(AUTH_ACC_TOKEN, token);
    return token;
  } catch (err) {
    return rejectWithValue(err.response?.data?.message || 'Error');
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state, action) {
      state.isAuth = false;
      state.token = null;
    },
    loginRequest: (state, action) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action?.payload?.access_token;
      state.isAuth = true;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.token = null;
      state.isAuth = false;
    },
    userLoadRequest: (state, action) => {
      state.loading = true;
    },
    userLoadFailure: (state, action) => {
      state.loading = false;
      state.token = null;
      state.isAuth = false;
    },
    userLoadSuccess: (state, action) => {
      console.log(action?.payload);
      state.loading = false;
      state.isAuth = true;
      state.token = action?.payload?.info?.access_token;
      const user = {};
      if (Object.keys(action?.payload).length > 0) {
        Object.entries(action?.payload).map(([key, value]) => {
          if (key !== 'info') {
            Reflect.set(user, key, value);
          }
        });
      }
      state.user = user;
    },
    authenticated: (state, action) => {
      console.log({ action });
      state.loading = false;
      state.redirect = '/';
      state.token = action.payload;
    },
    showAuthMessage: (state, action) => {
      state.message = action.payload;
      state.showMessage = true;
      state.loading = false;
    },
    hideAuthMessage: state => {
      state.message = '';
      state.showMessage = false;
    },
    signOutSuccess: state => {
      state.loading = false;
      state.token = null;
      state.redirect = '/';
    },
    showLoading: state => {
      state.loading = true;
    },
    signInSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(signIn.pending, state => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.redirect = '/';
        state.token = action.payload;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      })
      .addCase(signOut.fulfilled, state => {
        state.loading = false;
        state.token = null;
        state.redirect = '/';
      })
      .addCase(signOut.rejected, state => {
        state.loading = false;
        state.token = null;
        state.redirect = '/';
      })
      .addCase(signUp.pending, state => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.redirect = '/';
        state.token = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      })
      .addCase(signInWithGoogle.pending, state => {
        state.loading = true;
      })
      .addCase(signInWithGoogle.fulfilled, (state, action) => {
        state.loading = false;
        state.redirect = '/';
        state.token = action.payload;
      })
      .addCase(signInWithGoogle.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      })
      .addCase(signInWithFacebook.pending, state => {
        state.loading = true;
      })
      .addCase(signInWithFacebook.fulfilled, (state, action) => {
        state.loading = false;
        state.redirect = '/';
        state.token = action.payload;
      })
      .addCase(signInWithFacebook.rejected, (state, action) => {
        state.message = action.payload;
        state.showMessage = true;
        state.loading = false;
      });
  },
});

export const { authenticated, showAuthMessage, hideAuthMessage, signOutSuccess, showLoading, signInSuccess } =
  authSlice.actions;

export default authSlice.reducer;
