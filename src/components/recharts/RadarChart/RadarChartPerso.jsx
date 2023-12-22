import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

function RadarChartPerso(dataPerformances) {
console.log(dataPerformances.dataPerformances.kind);
let data = dataPerformances.dataPerformances;
console.log(data.kind);

 
const outputArray = Object.entries(data.kind).map(([key, value]) => ({ name: value }));
console.log(outputArray); 
let test = data.data.map(element => ({value: element.value, kind: element.kind}));
console.log(test);

const combinedData = test.map((entry, index) => ({
    ...entry,
    name: outputArray[index].name
  }));
  
  console.log(combinedData);

    return (
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#282D30', borderRadius: '10px' }}>
            <RadarChart outerRadius={100} width={730} height={250} data={combinedData} >
                <PolarGrid radialLines={false} />
                <PolarAngleAxis dataKey="name" tick={{ opacity: 1,fontWeight: 'light',fill: '#fff' }}   />
                
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                {/* <Legend /> */}
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartPerso