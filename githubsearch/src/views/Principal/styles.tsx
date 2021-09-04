  import styled from 'styled-components';
import {createGlobalStyle} from 'styled-components';

import theme from '../../theme.json';
const themes  = theme;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    background-color:${themes.colors['backgroud-white']};
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
  }
`;

export const Container = styled.div`
  flex:1;
  flex-direction:column;
  height: 100vh;
  display: flex;
`;

export const InputValue = styled.input`
    background-color: white;
    border-radius:${themes['border-radius']}px;
    border-width:0.5px;
    height: 30%;
    margin-right: 2%;
    width: 20%;
    align-items: center;
    justify-content: center;
`;

export const HeadDiv = styled.div`
    width: 100%;
    min-height: 40%;
    background-color:${themes.colors['purple-dark']};
    position: relative;
`;

export const ContainerPage = styled.div`
    width: 100%;
    height: 100%;
    flex-direction: column;
    position: absolute;
    align-items: center;
    background-color:transparent;
    display: flex;
`;

export const Button = styled.button`
    width: 15%;
    background-color: ${themes.colors['purple-light']};
    height: 34%;
    border-radius: ${theme['border-radius']}px;
`;

export const DivInput = styled.div`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100%;
    display: flex;
    min-height: 14%;
    background-color: transparent;
    padding-top: 4%;
`;

export const ButtonText = styled.label`
  margin:10px;
  font-weight:bold;
  text-align: center;
`; 
