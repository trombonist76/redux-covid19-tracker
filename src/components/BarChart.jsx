import { useSelector } from 'react-redux';
import { XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar, BarChart, ResponsiveContainer } from 'recharts';
import { covidDataSelector } from '../redux/covidSlice';
import {nFormatter,dateFormatter} from '../dataPrettier';


export default function ChartBar() {
  
  const covidData = useSelector(state=>covidDataSelector(state))
  console.log(covidData)
  return (
     <ResponsiveContainer className="chart" width="70%" height={400}>
       <BarChart data={[covidData]}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name"/>
        <YAxis tickFormatter={nFormatter} />
        <Tooltip formatter={(val,name,props)=>([nFormatter(val,3),props.name])}/>
        <Legend />
        <Bar name="Confirmed" dataKey="confirmed.value" fill="#8884d8" />
        <Bar name="Active" dataKey="active.value" fill="#82ca9d" />
        <Bar name="Deaths" dataKey="deaths.value" fill="red" />
      </BarChart>
    </ResponsiveContainer>
  );
}
