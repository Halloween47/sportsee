import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    Text
} from 'recharts';


const CustomTooltip = ({active, payload}) => {
    if (active && payload && payload.length) {
        const kilogram = payload.find(entry => entry.dataKey === 'kilogram');
        const calories = payload.find(entry => entry.dataKey === 'calories');

        return (
            <div style={{
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc'
            }}>
                {kilogram && <p style={{margin: 0}}>{`${kilogram.value}kg`}</p>}
                {calories && <p style={{margin: 0}}>{`${calories.value}kCal`}</p>}
            </div>
        );
    }

    return null;
};

function SimpleBarChart(props) {
    let data = props.dataActivity[0].sessions;
    return (
        <ResponsiveContainer width="100%" height="100%"
                             style={{backgroundColor: '#FBFBFB', borderRadius: '10px', padding: '50px'}}>
<Text
    angle={0}
    content="Activité quotidienne"
    lineHeight="1em"
    maxLines={3}
    textAnchor="middle"
    verticalAnchor="end"
    width={200}
  >
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
                    bottom: 0,
                }}
                >

                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ccc"/>
                <XAxis dataKey="day" />
                <YAxis orientation='right'/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend align="right" verticalAlign="top" height={50}/>
                <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" legendType="circle"
                     activeBar={<Rectangle fill="pink" stroke="blue"/>} radius={[20, 20, 0, 0]} maxBarSize={10}
                     barC={20}/>
                <Bar name="Calories brûlées (kCal)" dataKey={"calories"} fill="#E60000" legendType="circle"
                     activeBar={<Rectangle fill="gold" stroke="purple"/>} radius={[20, 20, 0, 0]} maxBarSize={10}/>
            </BarChart>
        </ResponsiveContainer>
    )
};

export default SimpleBarChart