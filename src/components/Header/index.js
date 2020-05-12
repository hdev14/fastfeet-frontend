import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/fastfeet-logo@2x.png';

import { HeaderContainer, Navbar, Signout } from './styles';

export default function Header() {
  return (
    <HeaderContainer>
      <Navbar>
        <nav>
          <Link id="logo" to="/">
            <img src={logo} alt="fastfeet" />
          </Link>
          <Link to="/order">encomendas</Link>
          <Link to="/deliveryman">entregadores</Link>
          <Link to="/recipient">destinatários</Link>
          <Link to="/throuble">problemas</Link>
        </nav>
        <Signout>
          <strong>Admin FastFeet</strong>
          <button type="button">sair do sistema</button>
        </Signout>
      </Navbar>
    </HeaderContainer>
  );
}
