import {PieChart, Pie, Label, ResponsiveContainer} from 'recharts';

function PieChartPerso(props) {
    let data = props.dataUser;
    console.log(data);
    let todayScore = data.todayScore * 100 + "% de votre objectif";

    console.log(todayScore);

    let dataTab = [data];
    console.log(dataTab);

    let resultatAngle = parseInt(todayScore) * 360 / 100;
    console.log(resultatAngle);

    return (
        <ResponsiveContainer width="100%" height="100%"
                             style={{backgroundColor: '#FBFBFB', borderRadius: '10px', paddingLeft: "15px"}}>

            <PieChart width={400} height={400}>
                <Pie
                    data={dataTab}
                    dataKey="todayScore"
                    cx={150}
                    cy={150}
                    innerRadius={85}
                    outerRadius={100}
                    fill="#FF0000"
                    startAngle={90}
                    endAngle={resultatAngle + 90}
                    cornerRadius={10}
                >
                    <Label value={todayScore} position="center"/>
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieChartPerso;