import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tabs3 from './Tabs3';
import RedirectionBox from './RedirectionBox';
const routerConainer = [
  { path: '/', element: <Tabs3 /> },
  { path: '/RedirectionBox', element: <RedirectionBox /> },
];
const NormalRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routerConainer.map((route) => {
          return <Route key={route.path} {...route} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default NormalRoutes;
