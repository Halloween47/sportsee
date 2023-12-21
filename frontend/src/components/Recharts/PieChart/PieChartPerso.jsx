import { PieChart, Pie, Label, ResponsiveContainer } from 'recharts';
import { DataService } from "../../../services/dataService";

// const data = [
//   { name: 'A', value: 12 },
//   { name: 'B', value: 88 },
// ];

const renderLegend = () => {
  return (
      <h2>Durée moyenne des sessions</h2>
  );
}

function PieChartPerso() {
  const dataServices = new DataService();
  let data = dataServices.getUser(18);
  let todayScore = data[0].todayScore + "% de votre objectif";
  // console.log(todayScore);
  return (
    <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#FBFBFB', borderRadius: '10px', paddingLeft: "15px" }}>

    <PieChart width={400} height={400}>
    <text x="10%" y="10%" textAnchor="top" dominantBaseline="top">
          <tspan fontSize="20" fontWeight="bold">Score</tspan>
        </text>
      <Pie
        data={data}
        dataKey="todayScore"
        cx={150}
        cy={150}
        innerRadius={85}
        outerRadius={100}
        fill="#FF0000"
        startAngle={180}
        endAngle={100}
        cornerRadius={10}
      >
        <Label value={todayScore} position="center" />
      </Pie>
    </PieChart>
    </ResponsiveContainer>
  )
}
export default PieChartPerso;