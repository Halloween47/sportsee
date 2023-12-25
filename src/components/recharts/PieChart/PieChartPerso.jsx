import {PieChart, Pie, Label, ResponsiveContainer} from 'recharts';

function PieChartPerso(props) {
    let data = props.dataUser;
    console.log(data);
    let todayScore;
    if (data[0].todayScore) {
        todayScore = data[0].todayScore * 100 + "% de votre objectif";
    } else {
        todayScore = data[0].score * 100 + "% de votre objectif";

    }

    console.log(todayScore);

    // let dataTab = [data];
    // console.log(dataTab);

    let resultatAngleTodayScore = parseInt(todayScore) * 360 / 100;
    console.log(resultatAngleTodayScore);
    const dataKeyToUse = data[0].todayScore ? "todayScore" : "score";

    return (
        <ResponsiveContainer width="100%" height="100%"
                             style={{backgroundColor: '#FBFBFB', borderRadius: '10px', paddingLeft: "0px"}}>
<h2 className='score'>Scores</h2>
            <PieChart width={400} height={400}>
                <Pie
                    // data={dataTab}
                    data={data}
                    dataKey={dataKeyToUse}
                    cx={140}
                    cy={140}
                    innerRadius={85}
                    outerRadius={100}
                    fill="#FF0000"
                    startAngle={90}
                    endAngle={resultatAngleTodayScore + 90}
                    cornerRadius={10}
                    isAnimationActive={true}
                >
                    <Label value={todayScore} position="center"/>
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieChartPerso;