import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar'

import SimpleBarChart from '../../components/Recharts/SimpleBarChart/SimpleBarChart';
import LineChartPerso from '../../components/Recharts/LineChart/LineChartPerso';
import RadarChartPerso from '../../components/Recharts/RadarChart/RadarChartPerso';
import PieChartPerso from '../../components/Recharts/PieChart/PieChartPerso';
import KeyData from '../../components/Recharts/KeyData/KeyData';

// import datasMocked from '../../datas/mocked/datasMocked.json'

import Calories from '../../assets/calories-icon.svg'
import Proteines from '../../assets/protein-icon.svg'
import Glucides from '../../assets/carbs-icon.svg'
import Lipides from '../../assets/fat-icon.svg'
import { DataService } from '../../services/dataService';
import { useEffect, useState } from 'react';

function Dashboard() {
    let {idUser} = useParams();
    let idUserinteger = parseInt(idUser, 10);
    
    // let listUsers = datasMocked.users; 
    // let currectInfosUser = listUsers.find((user) => user.id === idUserinteger);
    // let firstName = currectInfosUser.userInfos.firstName
    
    /////////////////////////////////
    
    /*Recup data USERS*/
    const [dataUser, setDataUser] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const dataService = new DataService();
            const data = await dataService.getUserAxios(idUserinteger);
            setDataUser(data);
          } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
          }
        };
      
        fetchData();
      }, [idUserinteger]);
          console.log(dataUser);

    let calories, glucides, lipides, proteines;
    if (dataUser && dataUser.keyData) {
        calories = dataUser.keyData.calorieCount;
        glucides = dataUser.keyData.carbohydrateCount;
        lipides = dataUser.keyData.lipidCount;
        proteines = dataUser.keyData.proteinCount;
    } else {
        calories = 0;
        glucides = 0;
        lipides = 0;
        proteines = 0;
}

/*Recup data SESSION*/
    const [dataSession, setDataSession] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
            const dataService = new DataService();
            const data = await dataService.getSessionAxios(idUserinteger);
            setDataSession(data);
          } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
          }
        };
      
        fetchData();
      }, [idUserinteger]);
          console.log(dataSession);

          let sessions;
          if(dataSession && dataSession.sessions) {
              sessions = dataSession.sessions;
              console.log(sessions);
          } else {
            console.log('probleme');
          }
          
/*Recup data PERFORMANCES*/
    const [dataPerformances, setDataPerformances] = useState(null);
    useEffect(() => {
            const fetchData = async () => {
              try {
                const dataService = new DataService();
                const data = await dataService.getPerformanceAxios(idUserinteger);
                setDataPerformances(data);
              } catch (error) {
                console.error('Erreur lors de la récupération des données :', error);
              }
            };
          
            fetchData();
          }, [idUserinteger]);
              console.log(dataPerformances);


              let kind;
              if (dataPerformances) {
                console.log(dataPerformances.kind);
                 kind = Object.values(dataPerformances.kind);

console.log(kind);
              } else {
                console.log('probleme performances');
              }




    
    return (
        <div className='page-dashboard'>
        <Header />
        <div className="body-dashboard">
        <Sidebar />
        <div className="section-dashboard">
        {!dataUser ? (
            <div>Chargement en cours...</div>
            ) : (
                <>
                    <h1>Bonjour {dataUser.userInfos.firstName}</h1>
                    <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
                    <div className="section-chart">
                        <div className="zone-chart">
                            <div className="zone-lineChart">
                                <SimpleBarChart />
                            </div>
                            <div className="zone-multiGraph">
                                <div className="zoneChart">
                                    <LineChartPerso dataSessions={sessions} />
                                </div>
                                <div className="zoneChart">
                                    <RadarChartPerso dataPerformances={dataPerformances} kind={kind} />
                                </div>
                                <div className="zoneChart">
                                    <PieChartPerso />
                                </div>
                            </div>
                        </div>
                        <div className="zone-details">
                            <div className="calories">
                                <KeyData srcImg={Calories} calories={calories} />
                            </div>
                            <div className="calories">
                                <KeyData srcImg={Proteines} calories={proteines} />
                            </div>
                            <div className="calories">
                                <KeyData srcImg={Glucides} calories={glucides} />
                            </div>
                            <div className="calories">
                                <KeyData srcImg={Lipides} calories={lipides} /> 
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