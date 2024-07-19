import React from 'react';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import BoardMain from './boardMain/BoardMain';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/board-main" element={<BoardMain />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
