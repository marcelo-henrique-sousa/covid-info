import React from 'react';
import { View, Text, Image } from 'react-native';

import { Container, ContagionTitle,ContagionDescription } from './styles';

const ContagionItem = () => {
  return (
    <Container>
      <Image style={{ width: '100%', height: '100%', }} resizeMode='contain' source={require('../../assets/images/sneeze.png')}/>
      <ContagionTitle>Contagion Title{"\n"}<ContagionDescription>Contagion Description</ContagionDescription></ContagionTitle>
    </Container>
  );
}

export default ContagionItem;
