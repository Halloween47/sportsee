import React from 'react';
import { LineChart, Line, XAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';

  const renderLegend = () => {
    return (
        <h2>Durée moyenne des sessions</h2>
    );
  }
  const CustomTooltip = ({ active, payload, label, sessionLengthValues }) => {
    if (active && payload && payload.length) {
      const sessionLength = payload[0].value;
  
      return (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px' }}>
          <p>{`${sessionLength} min`}</p>
        </div>
      );
    }
  
    return null;
  };

function LineChartPerso(props) {
  let data = props.dataSessions.sessions;
  console.log(data);
  const sessionLengthValues = data.map(entry => entry.sessionLength);
  console.log(sessionLengthValues);
    return (
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#FF0000', borderRadius: '10px' }}>
        
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="day"axisLine={false} tickLine={false}  tick={{ stroke: 'white', opacity: 0.5 }}/>
          {/* <Tooltip content={sessionLength} /> */}
          <Tooltip content={<CustomTooltip sessionLengthValues={sessionLengthValues} />} />

          <Legend align='left' verticalAlign='top' content={renderLegend}  wrapperStyle={{ color: '#FFFFFF', opacity: 0.5, width: '300px' }}/>
          <Line type="monotone" dataKey="sessionLength" stroke="#fff"  strokeWidth={2} activeDot={{ r: 8 }} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    
)
}
export default LineChartPerso