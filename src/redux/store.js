import { configureStore} from "@reduxjs/toolkit";
import countriesSlice from "./countriesSlice";
import covidSlice from "./covidSlice";


const store = configureStore({
  reducer:{
    "covid":covidSlice,
    "countries":countriesSlice
  }
})

export default store