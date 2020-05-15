import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  border: 1px solid var(--light-gray);
  background-color: white;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Navbar = styled.div`
  height: 64px;
  max-width: 1300px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
      color: var(--gray);
      text-transform: uppercase;
      font-size: 15px;
      font-weight: bold;
      transition: color .2s;

      &:hover {
        color: var(--dark-gray);
      }

    }

    a#logo img {
      height: 26px;
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid var(--light-gray);
    }

    a:not(#logo){
      margin: 0 10px;
    }
  }

`;

export const Signout = styled.div`
  display: flex;
  justify-self: flex-end;
  flex-direction: column;
  justify-content: center;

  strong {
    margin-bottom: 5px;
  }

  button {
    background: none;
    border: none;
    color: var(--red);
  }
`;
