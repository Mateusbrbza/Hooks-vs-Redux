import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.css';

const Navigation = props => {
  return (
    <header className="main-header">
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact>Todos os Produtos</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favoritos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
