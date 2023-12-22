import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Text } from 'recharts';
// import { DataService } from '../../../services/dataService';
// import { useParams } from 'react-router-dom';

function SimpleBarChart(props) {
  let dataActivity = props.dataActivity
  let data = dataActivity.sessions;
  return (
    <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#FBFBFB', borderRadius: '10px',padding: '50px' }}>
      <Text x={300} y={130} fontSize={24} textAnchor="middle">
      Activité quotidienne
    </Text>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 0,
            right: 200,
            left: 20,
            bottom: 100,
          }}
        >
          <CartesianGrid strokeDasharray="4 4" vertical={false}  stroke="#ccc"/>
          <XAxis dataKey="day" />
          <YAxis orientation='right' />
          <Tooltip />
          {/* <Legend align="right" verticalAlign="top" height={50}  content={renderLegend} /> */}
          {/* <Legend align="right" verticalAlign="top" height={50} content={renderLegend} /> */}
          <Legend align="right" verticalAlign="top" height={50} />
          <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" legendType="circle" activeBar={<Rectangle fill="pink" stroke="blue" />} radius={[20, 20, 0, 0]} maxBarSize={10} />
          <Bar name="Calories brûlées (kCal)" dataKey="calories" fill="#E60000" legendType="circle" activeBar={<Rectangle fill="gold" stroke="purple" />} radius={[20, 20, 0, 0]} maxBarSize={10} />
        </BarChart>
      </ResponsiveContainer>
  )
} ;

export default SimpleBarChart