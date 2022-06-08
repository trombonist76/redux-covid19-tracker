import React, {useEffect } from "react";
import AreaChart from './AreaChart'
import { useDispatch, useSelector } from "react-redux";
import { getCovidData, getHistoricalData } from "../redux/covidSlice";
import BarChart from "./BarChart";
import { countrySelector } from "../redux/countriesSlice";


export default function Charts() {
  const dispatch = useDispatch()
  const country = useSelector(state=>countrySelector(state))

  useEffect(()=>{
    dispatch(getHistoricalData())
  },[dispatch])

  useEffect(()=>{
    dispatch(getCovidData(country))
  },[dispatch,country])

  return (
    <div className="charts">
      {country.name
        ? <BarChart/>
        : <> 
            <AreaChart dataKey={"totalConfirmed"} title={"Confirmed"}/>
            <AreaChart dataKey={"deaths.total"} title={"Deaths"}/>
          </>
      }


      
    </div>
  );
}
