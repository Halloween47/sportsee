import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar'

import SimpleBarChart from '../../components/Recharts/SimpleBarChart/SimpleBarChart';
// import LineChartPerso from '../../components/Recharts/LineChart/LineChartPerso';
// import RadarChartPerso from '../../components/Recharts/RadarChart/RadarChartPerso';
// import PieChartPerso from '../../components/Recharts/PieChart/PieChartPerso';
// import KeyData from '../../components/Recharts/KeyData/KeyData';
import Loader from '../../components/Loader/Loader';

// import datasMocked from '../../datas/mocked/datasMocked.json'

// import Calories from '../../assets/calories-icon.svg'
// import Proteines from '../../assets/protein-icon.svg'
// import Glucides from '../../assets/carbs-icon.svg'
// import Lipides from '../../assets/fat-icon.svg'
// import { useEffect, useState } from 'react';

import { DataService } from '../../services/dataService';
import { useEffect } from 'react';
function Dashboard() {
    // let { idUser } = useParams();
    // let idUserinteger = parseInt(idUser, 10);
    // let dataService = new DataService();    
    
    // let [activity, setActivity] = useState(null)

    // useEffect(() => {
    //     dataService.getActivity(idUserinteger).then(data => setActivity(data.message))
    // });

    let { idUser } = useParams();
    let idUserinteger = parseInt(idUser, 10);

    let dataService = new DataService();    
    let allDatas = dataService.getAllDatas();

    let activity;
    // useEffect(() => {
    //     dataService.getActivity(idUserinteger).then(data = setActivity(data.message))
    // })

    return (
        <div className='page-dashboard'>
            <Header />
            <div className="body-dashboard">
                <Sidebar />
                <div className="section-dashboard">
                    {/* {!dataUser ? ( */}
                    {!activity ? (
                        <>
                            <Loader />
                        </>
                    ) : (
                        <>
                            {/* <h1>Bonjour {dataUser.userInfos.firstName}</h1> */}
                            <h1>Bonjour toto</h1>
                            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                            <div className="section-chart">
                                <div className="zone-chart">
                                    <div className="zone-lineChart">
                                        <SimpleBarChart dataActivity={activity} />
                                    </div>
                                    
                                </div>

                            </div>
                        </>
                    )}

                </div>

            </div>
        </div>
    )
}
export default Dashboard 