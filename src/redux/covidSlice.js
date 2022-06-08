import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL

export const getCovidData = createAsyncThunk("covid/getCovidData",async (country) => {
  const url = country.code ? `${apiBaseUrl}/countries/${country.code}` : apiBaseUrl
  const response = await axios(url)
  return response.data
})

export const getHistoricalData = createAsyncThunk("covid/getHistoricalData",async () => {
  const url = `${apiBaseUrl}/daily`
  const response = await axios(url)
  return response.data
})


const covidSlice = createSlice({
  name:"covid",
  initialState:{

    loading:"idle",
    error:"",
    covidData:{},

    historical:{
      loading:"idle",
      error:"",
      data:[]
    }

  },
  
  extraReducers:{
    [getCovidData.fulfilled] : (state,action) => {
      const {confirmed,deaths} = action.payload
      confirmed.name = "Confirmed"
      deaths.name = "Deaths"
      const active = {value:confirmed.value-deaths.value}
      active.name = "Active"
      state.covidData = {confirmed, deaths, active}
      state.loading = "filled"
    },

    [getCovidData.pending] : (state) => {
      state.loading = "loading"
    },

    [getCovidData.rejected] : (state,action) => {
      state.loading = "error"
      state.error = action.error.message
    },

    [getHistoricalData.fulfilled] : (state,action) => {
      action.payload.map(d=>{
        d.totalDeaths = d.deaths.total
      })

      state.historical.data = action.payload
      state.historical.loading = "filled"
    },

    [getHistoricalData.pending] : (state) => {
      state.historical.loading = "loading"
    },

    [getHistoricalData.rejected] : (state,action) => {
      state.historical.loading = "error"
      state.historical.error = action.error.message
    },

  }
})


//selectors
export const covidDataSelector = state => state.covid.covidData
export const loadingSelector = state => state.covid.loading
export const errorSelector = state => state.covid.error

export const historicalSelector = state => state.covid.historical

//slice
export default covidSlice.reducer