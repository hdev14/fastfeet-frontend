import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/fastfeet-logo@2x.png';
import { HeaderContainer, Navbar, Signout } from './styles';

export default function Header() {
  const dispatch = useDispatch();

  function handleSignOut() {
    dispatch(signOut());
  }

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
          <Link to="/problem">problemas</Link>
        </nav>
        <Signout>
          <strong>Admin FastFeet</strong>
          <button type="button" onClick={handleSignOut}>sair do sistema</button>
        </Signout>
      </Navbar>
    </HeaderContainer>
  );
}
