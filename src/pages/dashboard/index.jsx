import {useParams} from 'react-router-dom';

import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

import SimpleBarChart from '../../components/recharts/simplebarchart/simplebarchart';
import Loader from '../../components/loader/loader';


import {DataService} from '../../services/dataService';
import {useEffect, useState} from 'react';

function Dashboard() {

    let {idUser} = useParams();
    let idUserinteger = parseInt(idUser, 10);
    
    let [user, setUser] = useState(null);
    let [activity, setActivity] = useState(null);

    let dataService = new DataService();
    
    /*
    === AUTRE METHODE A TESTER POUR LA GESTION DE ASYNC ===
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await dataService.getUser(idUserinteger);
    //             setUser(data);
    //             console.log(data);
    //         } catch (error) {
    //             console.error("Une erreur s'est produite lors de la récupération des données :", error);
    //         }
    //     };
    
    //     fetchData();
    // }, [idUserinteger]);
     */

    useEffect(() => {
        dataService.getUser(idUserinteger).then(data => setUser(data));
        console.log(user);   
    },[idUserinteger, dataService, user]);
    
    useEffect(() => {
        dataService.getActivity(idUserinteger).then(data => setActivity(data));
        // console.log(activity);
    },[idUserinteger, dataService]);


    return (
        <div className='page-dashboard'>
            <Header/>
            <div className="body-dashboard">
                <Sidebar/>
                <div className="section-dashboard">
                    {/* {!dataUser ? ( */}
                    {!user ? (
                        <>
                            <Loader/>
                        </>
                    ) : (
                        <>
                            <h1>Bonjour {user[0].userInfos.firstName}</h1>
                            {/* <h1>Bonjour toto</h1> */}
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