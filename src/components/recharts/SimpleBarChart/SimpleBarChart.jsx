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
                backgroundColor: '#E60000',
                color: '#fff',
                marginTop: '-120px',
                marginLeft: '40px',
                border: '1px solid #ccc',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                {kilogram && <p style={{marginTop: 10,marginBottom:10, padding: 15}}>{`${kilogram.value}kg`}</p>}
                {calories && <p style={{marginTop: 10,marginBottom:10, padding: 15}}>{`${calories.value}kCal`}</p>}
            </div>
        );
    }

    return null;
};

function SimpleBarChart(props) {
    let data = props.dataActivity[0].sessions;
    return (
        <ResponsiveContainer width="100%" height="80%"
                             style={{backgroundColor: '#FBFBFB', borderRadius: '10px', padding: '20px 0px 40px 0px'}}>
<Text
    angle={0}
    content="Activité quotidienne"
    lineHeight="1em"
    maxLines={3}
    textAnchor="middle"
    verticalAnchor="end"
    style={{ margin: '30px 30px 0px 30px' }}
  >
    Activité quotidienne
  </Text>
                <BarChart
                data={data}
                margin={{
                    top: -20,
                    right: 20,
                    left: 50,
                    bottom: 0,
                }}
                barCategoryGap={30}
                >

                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ccc"/>
                <XAxis dataKey="day" tickLine={false} fontSize={11}/>
                <YAxis orientation='right'/>
                <Tooltip content={<CustomTooltip/>}/>
                <Legend align="right" verticalAlign="top" height={50}/>
                <Bar name="Poids (kg)" dataKey="kilogram" fill="#282D30" legendType="circle"
                     activeBar={<Rectangle fill="pink" stroke="blue"/>} radius={[20, 20, 0, 0]} maxBarSize={10} />
                <Bar name="Calories brûlées (kCal)" dataKey={"calories"} fill="#E60000" legendType="circle"
                     activeBar={<Rectangle fill="gold" stroke="purple"/>} radius={[20, 20, 0, 0]} maxBarSize={10}/>
            </BarChart>
        </ResponsiveContainer>
    )
};

export default SimpleBarChart