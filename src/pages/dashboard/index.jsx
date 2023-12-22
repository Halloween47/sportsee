import {useParams} from 'react-router-dom';

import Header from '../../components/header/header';
import Sidebar from '../../components/Sidebar/Sidebar'

import SimpleBarChart from '../../components/recharts/SimpleBarChart/SimpleBarChart';
import Loader from '../../components/loader/loader';


import {DataService} from '../../services/dataService';
import {useEffect, useState} from 'react';

function Dashboard() {

    let [activity, setActivity] = useState(null)
    let {idUser} = useParams();
    let idUserinteger = parseInt(idUser, 10);

    let dataService = new DataService();

    useEffect(() => {
        dataService.getActivity(idUserinteger).then(data => setActivity(data))
    },[])

    return (
        <div className='page-dashboard'>
            <Header/>
            <div className="body-dashboard">
                <Sidebar/>
                <div className="section-dashboard">
                    {/* {!dataUser ? ( */}
                    {!activity ? (
                        <>
                            <Loader/>
                        </>
                    ) : (
                        <>
                            {/* <h1>Bonjour {dataUser.userInfos.firstName}</h1> */}
                            <h1>Bonjour toto</h1>
                            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                            <div className="section-chart">
                                <div className="zone-chart">
                                    <div className="zone-lineChart">
                                        <SimpleBarChart dataActivity={activity}/>
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