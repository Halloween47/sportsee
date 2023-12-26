import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';

import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';

import SimpleBarChart from '../../components/recharts/simplebarchart/simplebarchart';
import LineChartPerso from "../../components/recharts/linechart/linechartperso";
import RadarChartPerso from "../../components/recharts/radarchart/radarchartperso";
import PieChartPerso from "../../components/recharts/piechart/piechartperso";
import KeyData from "../../components/recharts/keydata/keydata";

import Loader from '../../components/loader/loader';

import imgCalorie from "../../assets/calories-icon.svg";
import imgProteine from "../../assets/protein-icon.svg";
import imgLipides from "../../assets/carbs-icon.svg";
import imgGlucides from "../../assets/fat-icon.svg";

import {DataService} from '../../services/dataService'; 

function Dashboard() {

    let {idUser} = useParams();
    let idUserinteger = parseInt(idUser, 10);
    const { protocol, host } = window.location;
    let url = protocol + '//' + host;
    
    let [user, setUser] = useState(null);
    let [activity, setActivity] = useState(null);
    let [sessions, setSessions] = useState(null);
    let [performances, setPerformances] = useState(null);

    let dataService = new DataService();
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Utilisation de Promise.all pour effectuer plusieurs appels asynchrones en parallèle
            const [userData, activityData, sessionData, perfData] = await Promise.all([
              dataService.getUser(idUserinteger,url),
              dataService.getActivity(idUserinteger,url),
              dataService.getSessions(idUserinteger,url),
              dataService.getPerf(idUserinteger,url),
            ]);
            setUser(userData);
            // console.log(userData);
            setActivity(activityData);
            // console.log(activityData);
            setSessions(sessionData);
            // console.log(sessionData);
            setPerformances(perfData)  
            // console.log(perfData);
            // console.log(dataService.isMocked);
      
          } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données :", error);
          }
        };
      
        fetchData();
    //   }, [dataService, idUserinteger, user, activity, sessions]);
      }, []);



    {/* {!user || !activity || !sessions || !performances ? ( */}
    {/* {!user || !sessions ? ( */}
    
    return (
        <div className='page-dashboard'>
            <Header/>
            <div className="body-dashboard">
                <Sidebar/>
                <div className="section-dashboard">
            {!user || !activity || !sessions || !performances ? (
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
                                            <LineChartPerso dataSession={sessions}  />
                                        </div>
                                        <div className="zoneChart">
                                            <RadarChartPerso dataPerformances={performances} />
                                        </div>
                                        <div className="zoneChart">
                                            <PieChartPerso dataUser={user} />
                                        </div>
                                    </div>
                                </div>
                                <div className="zone-details">
                                    <div className="calories">
                                        <KeyData calories={user[0].keyData.calorieCount} srcImg={imgCalorie} valeur="calories" unit=" kCal" />
                                    </div>
                                    <div className="calories">
                                        <KeyData calories={user[0].keyData.proteinCount} srcImg={imgProteine} valeur="proteines" unit=" g" />
                                    </div>
                                    <div className="calories">
                                        <KeyData calories={user[0].keyData.carbohydrateCount} srcImg={imgLipides} valeur="glucides" unit=" g" />
                                    </div>
                                    <div className="calories">
                                        <KeyData calories={user[0].keyData.lipidCount} srcImg={imgGlucides} valeur="Lipides" unit=" g" />
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