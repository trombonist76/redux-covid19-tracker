import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countriesSelector, getCountries, selectCountry } from "../redux/countriesSlice";

export default function Countries() {
  const dispatch = useDispatch()
  const countries = useSelector(state=>countriesSelector(state))
  
  const handleChange = (e) => {
    const country = e.target.value ? countries.find(c=> c.iso3 === e.target.value) : {name:""}
    dispatch(selectCountry(country))
  }

  useEffect(()=>{
    dispatch(getCountries())
  },[dispatch])

  return (
    <select onChange={handleChange}>
      <option value="" defaultValue>Global</option>
      {countries.map((country,index)=>(
        <option key={index} name={country.name} value={country.iso3}>{country.name}</option>
      ))}
    </select>
  );
}
