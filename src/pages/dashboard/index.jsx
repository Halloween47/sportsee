import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

import SimpleBarChart from '../../components/recharts/simplebarchart/simplebarchart';
import LineChartPerso from "../../components/recharts/linechart/linechartperso";

import Loader from '../../components/loader/loader';

import {DataService} from '../../services/dataService'; 

function Dashboard() {

    let {idUser} = useParams();
    let idUserinteger = parseInt(idUser, 10);
    
    let [user, setUser] = useState(null);
    let [activity, setActivity] = useState(null);
    let [sessions, setSessions] = useState(null);

    let dataService = new DataService();
    
    // /*
    // === AUTRE METHODE A TESTER POUR LA GESTION DE ASYNC ===
    
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const userData = await dataService.getUser(idUserinteger);
                
    //             if (JSON.stringify(userData) !== JSON.stringify(user)) {
    //                 setUser(userData);
    //                 console.log(userData);
    //             }
    
    //             const activityData = await dataService.getActivity(idUserinteger);
    //             setActivity(activityData);
    //             console.log(activityData);

    //             const sessionData = await dataService.getSessions(idUserinteger);
    //             console.log(sessionData);
    //             setSessions(sessionData);

    //         } catch (error) {
    //             console.error("Une erreur s'est produite lors de la récupération des données :", error);
    //         }
    //     };
    
    //     fetchData();
    // // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, []); // Le tableau vide signifie que le useEffect s'exécute une seule fois après le rendu initial
    ///////////////////////////////////////////////////////////
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Utilisation de Promise.all pour effectuer plusieurs appels asynchrones en parallèle
            const [userData, activityData, sessionData] = await Promise.all([
              dataService.getUser(idUserinteger),
              dataService.getActivity(idUserinteger),
              dataService.getSessions(idUserinteger),
            ]);
            setUser(userData);
            console.log(userData);
            setActivity(activityData);
            console.log(activityData);
            setSessions(sessionData);
            console.log(sessionData);
      
          } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données :", error);
          }
        };
      
        fetchData();
    //   }, [dataService, idUserinteger, user, activity, sessions]);
      }, []);
      
    ///////////////////////////////////////////////////////////
    //  */

    // useEffect(() => {
    //     dataService.getUser(idUserinteger).then(data => setUser(data));
    //     console.log(user);   
    // },[idUserinteger, dataService, user]);
    
    // useEffect(() => {
    //     dataService.getActivity(idUserinteger).then(data => setActivity(data));
    //     console.log(activity);
    // },[idUserinteger, dataService]);
    
    // useEffect(() => {
        //     dataService.getSessions(idUserinteger).then(data => setSessions(data));
        //     console.log(sessions);
        // },[idUserinteger, dataService]);
        
    return (
        <div className='page-dashboard'>
            <Header/>
            <div className="body-dashboard">
                <Sidebar/>
                <div className="section-dashboard">
                    {/* {!dataUser ? ( */}
                    {!user || !activity || !sessions ? (
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
                                        <SimpleBarChart dataActivity={activity} />
                                    </div>
                                    <div className="zone-multiGraph">
                                        <div className="zoneChart">
                                            {/* <LineChartPerso dataSessions={sessions} /> */}
                                            <LineChartPerso dataSession={sessions}  />
                                        </div>
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