import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { countrySelector } from '../redux/countriesSlice'
import { covidDataSelector, getCovidData, loadingSelector } from '../redux/covidSlice'
import Card from './Card'

export default function InfoCards() {
  const country = useSelector(state=>countrySelector(state))
  const loading = useSelector(state=>loadingSelector(state))
  const covidData = useSelector(state=>covidDataSelector(state))
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(getCovidData(country))
  },[dispatch,country])

  return (
    <section>
      {Object.entries(covidData).map((data,index)=>
        <Card key={index} data={data}/>)}
    </section>
  )
}
