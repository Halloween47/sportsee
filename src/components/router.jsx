import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Profils from '../pages/profils';
import Dashboard from '../pages/dashboard';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" component={Profils} />
                <Route path="/user/:idUser" component={Dashboard} />
            </Routes>
        </Router>
        )
    }
    
    export default AppRouter