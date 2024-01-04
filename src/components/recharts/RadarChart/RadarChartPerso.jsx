import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer } from 'recharts';

function RadarChartPerso(props) {
    const data = props.dataPerformances;
    const kind = data.map((performance) => performance.kind);
    const datasValuesKind = data.map(performance => performance.data);
    const values = datasValuesKind[0].map(data => data.value);
    const prepaKind = kind[0];
    var newArrayData = Object.values(prepaKind).map(function(value, index) {
        return {
            name: value,
            value: values[index]
        };
    });

    return (
        <ResponsiveContainer width="100%" height="100%" style={{ backgroundColor: '#282D30', borderRadius: '10px', padding: '0px' }}>
            <RadarChart innerRadius={0} data={newArrayData}  style={{ borderRadius: '10px', padding: '0px' }} >
                <PolarGrid radialLines={false} style={{ backgroundColor: 'violet'}}  />
                <PolarAngleAxis dataKey="name" tick={{ opacity: 1,fontWeight: 'light',fill: '#fff',fontSize: 11 }}   />
                
                <Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6}  style={{ backgroundColor: 'violet'}} />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarChartPerso