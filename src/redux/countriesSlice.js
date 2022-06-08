import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const getCountries = createAsyncThunk("countries/getCountries",async () => {
  const apiBaseUrl = process.env.REACT_APP_API_BASE_URL
  const url = `${apiBaseUrl}/countries`
  const response = await axios(url)
  return response.data
})


const countrySlice = createSlice({
  name:"countries",
  initialState:{
    country:{
      name:"",
      code:""
    },

    loading:"idle",
    error:"",
    data:[],

  },
  reducers:{
    selectCountry : (state,action) => {
      state.country = action.payload
    }
  },

  extraReducers:{
    
    [getCountries.fulfilled] : (state,action) => {
      state.data = action.payload.countries
      state.loading = "filled"
    },
    [getCountries.pending] : (state) => {
      state.loading = "loading"
    },

    [getCountries.rejected] : (state,action) => {
      state.loading = "error"
      state.error = action.error.message
    },

  }
})


//selectors
export const countriesSelector = state => state.countries.data
export const countrySelector = state => state.countries.country
export const loadingSelector = state => state.countries.loading
export const errorSelector = state => state.countries.error

//actions
export const {selectCountry} = countrySlice.actions

//slice
export default countrySlice.reducer