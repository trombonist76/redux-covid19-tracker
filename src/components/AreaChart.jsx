import { useSelector } from 'react-redux';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { historicalSelector } from "../redux/covidSlice";
import {nFormatter,dateFormatter} from '../dataPrettier';

export default function ChartArea({title,dataKey}) {
  const historical = useSelector(state=>historicalSelector(state))
  const {loading,error,data} = historical


  return (
    <>
      <h4>{title}</h4>
      <ResponsiveContainer className="chart" width="70%" height={400}>
        <AreaChart
          data={data}
          syncId="anyId"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis tickFormatter={dateFormatter} dataKey="reportDate" angle={-45} tickMargin={25} height={ 70 } />
          <YAxis tickFormatter={nFormatter}/>
          <Tooltip formatter={(val)=>([nFormatter(val,3),title])}/>
          <Area type="monotone" dataKey={dataKey} stroke="#8884d8" fill="#8884d8"/>
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}
