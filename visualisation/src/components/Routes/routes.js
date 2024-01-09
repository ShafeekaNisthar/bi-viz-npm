// routes.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ParentComponent from '../Iframe_Situation/parentComponent';
import Chart from '../chart';
import Home from '../Home';

const AppRoutes = () => (
      <Routes>
        {/* Other routes can go here if needed */}
        <Route path='/' Component={Home}/>
        <Route path="/Parent" Component={ParentComponent} />
        <Route path="/chart/:ChartID" Component={Chart}/>       
      </Routes>
);

export default AppRoutes;
