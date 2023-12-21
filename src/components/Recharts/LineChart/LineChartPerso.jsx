import React from 'react';
import { LineChart, Line, XAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { DataService } from '../../../services/dataService';

// const data = [
//     {
//       name: 'L',
//       uv: 4000,
//       pv: 2400,
//       amt: 2400,
//     },
//     {
//       name: 'M',
//       uv: 3000,
//       pv: 1398,
//       amt: 2210,
//     },
//     {
//       name: 'M',
//       uv: 2000,
//       pv: 9800,
//       amt: 2290,
//     },
//     {
//       name: 'J',
//       uv: 2780,
//       pv: 3908,
//       amt: 2000,
//     },
//     {
//       name: 'V',
//       uv: 1890,
//       pv: 4800,
//       amt: 2181,
//     },
//     {
//       name: 'S',
//       uv: 2390,
//       pv: 3800,
//       amt: 2500,
//     },
//     {
//       name: 'D',
//       uv: 3490,
//       pv: 4300,
//       amt: 2100,
//     },
//   ];

  const renderLegend = () => {
    return (
        <h2>Durée moyenne des sessions</h2>
    );
  }

function LineChartPerso(props) {
  // const dataServices = new DataService();
  // let data = dataServices.getSessions(18); 
    return (
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#FF0000', borderRadius: '10px' }}>
        
        <LineChart
          width={500}
          height={300}
          data={props.dataSessions}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          {/* <CartesianGrid strokeDasharray="3 3" /> */}
          <XAxis dataKey="day"axisLine={false} tickLine={false}  tick={{ stroke: 'white', opacity: 0.5 }}/>
          {/* <YAxis /> */}
          <Tooltip />
          <Legend align='left' verticalAlign='top' content={renderLegend}  wrapperStyle={{ color: '#FFFFFF', opacity: 0.5, width: '300px' }}/>
          <Line type="monotone" dataKey="sessionLength" stroke="#fff"  strokeWidth={2} activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    
)
}
export default LineChartPerso