import * as React from "react";
import { Link } from "react-router-dom";


import Header from '../../components/header/header'
import Sidebar from '../../components/Sidebar/Sidebar'

import Man from '../../assets/man.svg'
import Girl from '../../assets/girl.svg'
import SwitchButton from "../../components/SwitchButton/SwitchButton";

function Profils() {

    

    return (
        <div className="profils">
            {/* <AppRouter /> */}
            <Header />
            <div className="body-profils">
                <Sidebar />
                <div className="selection">
                    <div className="switchbutton">
                        <SwitchButton />
                    </div>
                    <div className="utilisateur">
                        <Link to="/dashboard/12">
                            <img src={ Man } alt="" />
                            <p>Karl</p>
                        </Link>
                    </div>
                    <div className="utilisateur">
                        <Link to="/dashboard/18">
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