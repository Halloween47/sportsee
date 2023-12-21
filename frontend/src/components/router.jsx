import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Profils from '../pages/Profils';
import Dashboard from '../pages/Dashboard';
// import NotFound from './components/NotFound';

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" component={Profils} />
                <Route path="/user/:idUser" component={Dashboard} />
                {/* <Route component={NotFound} /> */}
            </Routes>
        </Router>
        )
    }
    
    export default AppRouter