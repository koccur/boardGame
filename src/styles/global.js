import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%; 
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  body #root{
    width: 100%;
  }
`;
    // background: ${({theme}) => theme.body};
    // color: ${({theme}) => theme.text};