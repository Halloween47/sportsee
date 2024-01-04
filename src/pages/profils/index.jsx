import * as React from "react";
import {useState} from "react";
import { Link } from "react-router-dom";


import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar';

import Man from '../../assets/man.svg';
import Girl from '../../assets/girl.svg';

function Profils() {
    const [etatBouton, setEtatBouton] = useState(() => {
        return sessionStorage.getItem("etatBouton") || "Data Mocked";
      });

      const toggleOnOff = () => {
        const nouvelEtat = etatBouton === "Data Mocked" ? "API" : "Data Mocked";
        setEtatBouton(nouvelEtat);
    
        sessionStorage.setItem("etatBouton", nouvelEtat);
      };

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

