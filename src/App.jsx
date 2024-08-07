import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import BoardMain from './components/boardMain/BoardMain';

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
