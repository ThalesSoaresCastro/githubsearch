import styled from 'styled-components';

import theme from '../../theme.json';
const themes  = theme;


export const DivCard = styled.div`
  height: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  background-color: white;
  box-shadow: 4px 4px 4px black;
  margin-bottom: 2%;
  border-radius: ${themes['border-radius']}px;
`;

export const TextElement = styled.label`
  text-align: center;
  font-size: 16px;
  background-color: transparent;
`;

export const LabelTextElement = styled.label`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color:${theme.colors['purple-light']};
`;

export const DivText = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin:6px;
  background-color:transparent;
`;

export const DivHTMLURL = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin:6px;
  display: flex;
  background-color:transparent;
`;



export const Avatar = styled.img`
  height: 70%;
  width: 70%;
  object-fit: contain;
`;

export const CardContainer = styled.div`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color:transparent;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const DivInfos = styled.label`
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color:transparent;
  display: flex;
  min-width: 70%;
`;
