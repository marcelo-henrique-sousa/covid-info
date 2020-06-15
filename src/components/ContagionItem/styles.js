import styled from 'styled-components/native';
import { screenWidth } from '~/pages/Main/styles';

export const Container = styled.View.attrs({
  elevation: 6
})`
  /* align-items: flex-start;
  justify-content: space-between; */
  /* flex-direction: row; */
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
  width: ${screenWidth - 30}px;
  height: 150px;
  background-color: #fff;
`;

export const ContagionTitle = styled.Text`
  /* margin-left: -100px; */
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const ContagionDescription = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #333;
`;
