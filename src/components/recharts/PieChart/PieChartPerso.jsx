import React from "react";
import {PieChart, Pie, Label, ResponsiveContainer} from 'recharts';

function PieChartPerso(props) {
    let data = props.dataUser;
    let todayScore;
    if (data[0].todayScore) {
        todayScore = data[0].todayScore * 100;
    } else {
        // todayScore = data[0].score * 100 + "% de votre objectif";
        todayScore = data[0].score * 100;
    }
    let resultatAngleTodayScore = parseInt(todayScore) * 360 / 100;
    const dataKeyToUse = data[0].todayScore ? "todayScore" : "score";

    const CustomLabel = ({ viewBox, value1, value2 }) => {
        const { cx, cy } = viewBox;
        return (
            <g>
                <text id="score" x={cx} y={cy - 10} textAnchor="middle">{value1}%</text>
                <text x={cx} y={cy + 15} textAnchor="middle">{value2}</text>
            </g>
        );
    };

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
                    // isAnimationActive={true}
                >
                    {/* <Label value={todayScore} position="center"/> */}
                    <Label content={<CustomLabel value1={todayScore.toFixed(0)} value2="de votre objectif" />} position="center" />           
                </Pie>
            </PieChart>
        </ResponsiveContainer>
    )
}

export default PieChartPerso;