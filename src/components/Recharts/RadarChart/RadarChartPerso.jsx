import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer } from 'recharts';
import { DataService } from '../../../services/dataService';

// const data = [
//     {
//       subject: 'Intensité',
//       A: 120,
//       B: 110,
//       fullMark: 150,
//     },
//     {
//       subject: 'Vitesse',
//       A: 98,
//       B: 130,
//       fullMark: 150,
//     },
//     {
//       subject: 'Force',
//       A: 86,
//       B: 130,
//       fullMark: 150,
//     },
//     {
//       subject: 'Endurance',
//       A: 99,
//       B: 100,
//       fullMark: 150,
//     },
//     {
//       subject: 'Energie',
//       A: 85,
//       B: 90,
//       fullMark: 150,
//     },
//     {
//       subject: 'Cardio',
//       A: 65,
//       B: 85,
//       fullMark: 150,
//     },
//   ];


function RadarChartPerso(dataPerformances) {
//   const dataServices = new DataService();
//   let data = dataServices.getPerf(18);
console.log(dataPerformances);
console.log(dataPerformances.kind);

  
    return (
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#282D30', borderRadius: '10px' }}>
            <RadarChart outerRadius={140} width={730} height={250} data={dataPerformances} >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" tick={{ opacity: 1,fontWeight: 'light' }} />
                {/* <PolarRadiusAxis dataKey="value" cx={9} angle={90} domain={[0, 150]} tick={{display: 'none'}}/> */}
                
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
                {/* <Legend /> */}
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartPerso