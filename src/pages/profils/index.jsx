import * as React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";


import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar';

import Man from '../../assets/man.svg';
import Girl from '../../assets/girl.svg';
// import SwitchButton from "../../components/switchbutton/switchbutton";

// import { useButtonState } from "../../components/ButtonStateContext";

function Profils() {
    /////////////////////////////////////////////////////////
    // const { etatBouton, toggleOnOff } = useButtonState();
    /////////////////////////////////////////////////////////
    
    /////////////////////////////////////////////////////////
    // console.log(etatBouton);
    // const linkTest = {pathname:"/dashboard/12",state: { etatBouton }};
    // console.log(linkTest);
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    const [etatBouton, setEtatBouton] = useState(() => {
        // Lire l'état du bouton depuis le sessionStorage ou localStorage
        return sessionStorage.getItem("etatBouton") || "Data Mocked";
      });

      const toggleOnOff = () => {
        const nouvelEtat = etatBouton === "Data Mocked" ? "API" : "Data Mocked";
        setEtatBouton(nouvelEtat);
    
        // Stocker l'état du bouton dans le sessionStorage ou localStorage
        sessionStorage.setItem("etatBouton", nouvelEtat);
      };
    /////////////////////////////////////////////////////////

    return (
        <div className="profils">
            {/* <AppRouter /> */}
            <Header />
            <div className="body-profils">
                <Sidebar />
                <div className="selection">
                    <div className="switchbutton">
                        <button id='switchButton' className="toggleButton" onClick={toggleOnOff}>
                            {etatBouton === 'Data Mocked' ? 'Data Mocked' : 'API'}
                        </button>
                    </div>
                    <div className="utilisateur">
                        <Link to={{ pathname: "/dashboard/12", state: { etatBouton } }}>
                            <img src={Man} alt="" />
                            <p>Karl</p>
                        </Link>

                    </div>
                    <div className="utilisateur">
                        <Link to={{ pathname: "/dashboard/18", state: { etatBouton } }}>
                            <img src={ Girl } alt="" />
                            <p>Girl</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        )
    }
export default Profils

