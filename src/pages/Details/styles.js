import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const screenHeigth = Dimensions.get('window').height.toFixed(2);
export const screenWidth = Dimensions.get('window').width.toFixed(2);


export const RootContainer = styled.View`
flex: 1;
height: ${ screenHeigth }px;
background-color: #f5f5f5;
`;

export const TopContainer = styled(LinearGradient).attrs({
  colors:[ '#11998e', '#38ef7d' ],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  transform : [ { scaleX : 2 } ],
  borderBottomStartRadius : 200,
  borderBottomEndRadius : 200,
  overflow : 'hidden',
})`
flex: 1;
height: 30%;
padding-top: ${ 30 + getStatusBarHeight(true) }px;
`;

export const BottomContainer = styled.View`
  align-items: center;
  background-color: #f5f5f5;
  height: 70%;
`;

export const CurvedContainer = styled.View.attrs({
  flex: 1,
  transform: [ { scaleX : 0.5 } ],
  alignItems: 'center',
  justifyContent: 'center'
})`
  /* width: ${screenWidth}px;
  height: 100%; */
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #fff;
  font-weight: bold;
  padding: 10px;
`;

export const SubTitle = styled.Text`
  elevation: 4;
  padding: 10px;
  font-size: 16px;
  font-weight: 500;
  color: ${ props => props.color || '#fff' };
`;

export const SectionTitle = styled.Text`
  align-self: flex-start;
  font-size: 22px;
  color: #333;
  font-weight: bold;
  padding: 15px;
`;

export const SymptompsContainer = styled.View.attrs({
  elevation: 12,
})`
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  width: ${ screenWidth - 30 }px;
  height: 120px;
  flex-direction: row;
`;

export const SymptompsCard = styled.ImageBackground.attrs({
  justifyContent: "center",
  alignItems: "center",
  elevation: 4,
  shadowOffset: { width: 10, height: 10 },
  shadowColor: "red",
  shadowOpacity: 0.5,
  shadowRadius: 10,
})`
  margin: 0 10px;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  background-color: ${ props => props.color || '#333' };
  /* box-shadow: 10px 5px 5px ${ props => props.color || '#333' }; */
`;

export const ContagionContainer = styled.View.attrs({
  elevation: 12,
})`
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 10px;
  width: ${ screenWidth - 30 }px;
  height: ${ screenHeigth / 4.4 }px;
  /* flex-direction: row; */
`;