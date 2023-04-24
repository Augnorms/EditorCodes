import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainDashboard from './Pages/Dashboards/1_MainDashbord/MainDashboard';
import Editor from './Pages/Editor/1_Main/Editor';


interface Props {}

function Mainroutes(props: Props) {
  return (
    <BrowserRouter>
      <Routes>

       
            <Route path={''} element={''} />
            <Route path={'/dashboard'} element={<MainDashboard />} />
            <Route path='/editor/:tempname' element={<Editor />}/>
       
 
      </Routes>
    </BrowserRouter>
  );
}

export default Mainroutes;
