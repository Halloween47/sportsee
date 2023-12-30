import React from 'react';
import { LineChart, Line, XAxis,  Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';


  const renderLegend = () => {
    return (
        <h2>Durée moyenne des sessions</h2>
    );
  }
  const CustomTooltip = ({ active, payload, label, sessionLengthValues }) => {
    if (active && payload && payload.length) {
      const sessionLength = payload[0].value;
  
      return (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px', margin:'30px' }}>
          <p>{`${sessionLength} min`}</p>
        </div>
      );
    }
  
    return null;
  };

function LineChartPerso(props) {
  ///////////////////////////////////////
  let data = props.dataSession[0].sessions;
  // console.log(data);
  ///////////////////////////////////////
  // let data = props.dataSessions.sessions;
  // console.log(data);
  const sessionLengthValues = data.map(entry => entry.sessionLength);
  // console.log(sessionLengthValues);
  // let data = [];
  // let sessionLengthValues = "test";
//////////
// const day = data.map((day) => day.day);
// console.log(day); 

const dataDays = data.map((data) => {
  switch (data.day) {
    case 1:
      return {...data, day: "L"};
      case 2:
      return {...data, day: "M"};
      case 3:
      return {...data, day: "M"};
      case 4:
      return {...data, day: "J"};
      case 5:
      return {...data, day: "V"};
      case 6:
      return {...data, day: "S"};
      case 7:
      return {...data, day: "D"};
      
  
    default:
      break;
  }   }
)
// console.log(dataDays);
//////////

function CustomCursor({ points }) {
  console.log('df', points)
  return (
    <Rectangle
      fill="black"
      opacity={0.1}
      x={points[0].x}
      width={1000}
      height={300}
    />
  )
}

    return (
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#FF0000', borderRadius: '10px' }}>
        
        <LineChart
          width={500}
          height={300}
          data={dataDays}
          margin={{
            top: 0,
            right: 30,
            left: 20,
            bottom: 0,
          }}
        >
          <XAxis dataKey="day"axisLine={false} tickLine={false}  tick={{ stroke: 'white', opacity: 0.5 }}/>
          {/* <Tooltip content={sessionLength} /> */}
          {/* <Tooltip content={<CustomTooltip sessionLengthValues={sessionLengthValues} />} cursor={{ stroke: 'black', strokeWidth: 1000 , strokeOpacity: 1, height: 100 }} /> */}
          <Tooltip content={<CustomTooltip sessionLengthValues={sessionLengthValues} />} cursor={<CustomCursor />} />

          <Legend align='left' verticalAlign='top' content={renderLegend}  wrapperStyle={{ color: '#FFFFFF', opacity: 0.5, width: '300px' }}/>
          <Line type="monotone" dataKey="sessionLength" stroke="#fff"  strokeWidth={2} activeDot={{ r: 8 }} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    
)
}
export default LineChartPerso