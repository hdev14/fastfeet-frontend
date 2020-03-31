import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  :root {
    --purple: #7D40E7;
    --light-gray: #DDDDDD;
    --gray: #999999;
    --dark-gray: #444444;
    --red: #DE3B3B;
    font-size: 16px;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    height: 100%;
    width: 100%;
  }

  input, textarea, button {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
