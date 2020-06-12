import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  width: 300px;
  height: 100px;
  background-color: #f5f5;
`;

export const ContagionTitle = styled.Text`
  margin-left: -100px;
  align-self: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
`;

export const ContagionDescription = styled.Text`
  font-size: 12px;
  font-weight: 300;
  color: #eee;
`;
