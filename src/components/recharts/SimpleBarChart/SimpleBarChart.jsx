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
                // backgroundColor: 'rgba(255, 255, 255, 0.8)',
                backgroundColor: '#E60000',
                color: '#fff',
                // padding: '20px 0px 20px 0px',
                marginTop: '-120px',
                marginLeft: '40px',
                // borderRadius: '5px',
                border: '1px solid #ccc',
                // textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                // justifyContent: 'center',
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
    // console.log(props);
    let data = props.dataActivity[0].sessions;
    return (
        <ResponsiveContainer width="90%" height="70%"
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
                    top: -20,
                    right: 0,
                    left: 0,
                    bottom: 0,
                }}
                >

                <CartesianGrid strokeDasharray="4 4" vertical={false} stroke="#ccc"/>
                <XAxis dataKey="day"  tickLine={false} />
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