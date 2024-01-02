// import {useLocation} from 'react-router-dom';
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

// import { useButtonState } from "../../components/ButtonStateContext";

function Dashboard() {
    ///////////////////////////////////////////////////////
//     const { etatBouton } = useButtonState();
//     console.log(etatBouton);
//     const location = useLocation();
//   const { state } = location;
//   const { pathname } = location;
//   console.log(location);
//   console.log(state);
//   console.log(pathname);
    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    const [etatBouton, setEtatBouton] = useState(() => {
        // Lire l'état du bouton depuis le sessionStorage ou localStorage
        return sessionStorage.getItem("etatBouton") || "Data Mocked";
      });
      console.log(etatBouton);
    ///////////////////////////////////////////////////////

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
              dataService.getUser(idUserinteger,url, etatBouton),
              dataService.getActivity(idUserinteger,url, etatBouton),
              dataService.getSessions(idUserinteger,url, etatBouton),
              dataService.getPerf(idUserinteger,url, etatBouton),
            ]);
            setUser(userData);
            // console.log(userData);
            setActivity(activityData);
            // console.log(activityData);
            setSessions(sessionData);
            // console.log(sessionData);
            setPerformances(perfData)  
            // console.log(perfData);
            const mockedOrNot = dataService.isMocked;
            console.log(mockedOrNot);
            if (etatBouton === 'API') {
                dataService.isMocked = false;
                console.log('etats isMocked à false');
            } else {
                dataService.isMocked = true;
                console.log('etats isMocked à true');
            }
      
          } catch (error) {
            console.error("Une erreur s'est produite lors de la récupération des données :", error);
          }
        };
      
        fetchData();
    //   }, [dataService, idUserinteger, user, activity, sessions]);
    // eslint-disable-next-line
      }, []);



    
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
                            <h1>Bonjour <span>{user[0].userInfos.firstName}</span></h1>
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