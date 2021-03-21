import React from 'react';
import { Container } from 'react-bootstrap';
import { HeaderComp } from './components/header/Header';
import { SidebarComp } from './components/sidebar/Sidebar';
import { Homescreen } from './screens/homeScreen/HomeScreen';

import './_app.scss';

export const App = () => {
  return (
    <>
      <HeaderComp />
      <div className="app__container border border-info">
        <SidebarComp />
        <Container fluid className="app_main border border-warning">
          <Homescreen />
        </Container>
      </div>
    </>
  );
};
