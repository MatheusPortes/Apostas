import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';
import { IoFootballOutline } from 'react-icons/io5';

import './App.css';
import ButtonLogin from './components/Buttons';
import Routes from './Routes';

function App() {
  return (
    <BrowserRouter>
    <main>
      <div className="menu-lateral">
        <div className="logo"></div>
          <nav>
            <ul>
              <li>
                <Link to="/"> <span className="link"> <MdHome size={30} color="#FDD705"/> Inicio </span> </Link>
              </li>
              <li>
                <Link to="/futebol"> <span className="link"> <IoFootballOutline size={30} color="#FDD705"/> Futebol </span> </Link>
              </li>
              <li className="btnLogin">
                <Link to="/login"> <ButtonLogin color="#000"/> </Link>
              </li>
            </ul>
          </nav>
      </div>
      <section className="sections" id="sections">
        <h1 style={{marginLeft: 10}}>CLUBEDASAPOSTAS</h1>
        <Routes />
      </section>
    </main>
    </BrowserRouter>

  );
}

export default App;
