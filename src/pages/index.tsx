import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { ROUTE_PATHS } from '../constants/routes';
import { Header } from '../containers/Header';
import { NavBar } from '../containers/NavBar';
import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Create } from '../pages/Create';

import './index.scss';

const Pages = () => {

  return (
    <div className="page-container">
      <Header />
      <div className="main">
        <NavBar />
        <Routes>
          <Route path={ROUTE_PATHS.home} element={<Home />}/>
          <Route path={`${ROUTE_PATHS.details}/:id`} element={<Details />}/>
          <Route path={ROUTE_PATHS.create} element={<Create />}/>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  )
};

export default Pages;
export { Pages };
