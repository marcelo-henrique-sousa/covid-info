import React from 'react';
import { View, Text, Image } from 'react-native';

import { Container, ContagionTitle, ContagionDescription } from './styles';

const ContagionItem = ({source, title, description}) => {
  return (
    <Container>
      <ContagionTitle>{title}{"\n"}<ContagionDescription>{description}</ContagionDescription></ContagionTitle>
      <Image style={{ width: '80%', height: '80%', marginRight: -80, marginTop: -20, alignSelf: 'flex-end',}} resizeMode='contain' source={source}/>
    </Container>
  );
}

export default ContagionItem;
