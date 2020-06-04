import React from 'react';
import {
  Text, 
  Image, 
  StyleSheet, 
  Dimensions, 
  ImageBackground, 
  StatusBar,
  ScrollView,
  View,} from 'react-native';

//screen style imports
import { 
  screenWidth, 
  screenHeigth, 
  RootContainer, 
  TopContainer, 
  BottomContainer, 
  CurvedContainer, 
  CaseUpdateContainer, 
  CountriesContainer,
  Title,
  Section,
  SectionTitle,
  StatsDescription,
  StatsDataNumber, } from './styles';

function Main() {
  return(
    <RootContainer>
      <TopContainer>
        <CurvedContainer>
          <ImageBackground 
          style={ { alignItems: 'center', justifyContent: 'center', flexDirection: 'row', width: '100%', height: '100%' } } 
          resizeMode='contain' 
          source={require('../../assets/images/virus.png')} >
            <Image 
            style={ { width: '60%', height: '60%', marginLeft: -screenWidth / 4, marginTop: screenWidth / 3.7 } } 
            source={require('../../assets/images/doctor.png')} 
            resizeMode='contain'/>
            <Title>If you can {'\n'}stay in home</Title>
          </ImageBackground>
        </CurvedContainer>
      </TopContainer>
      <BottomContainer>
        <SectionTitle>Case update</SectionTitle>
        <CaseUpdateContainer>
          <StatsDescription>{<StatsDataNumber color='#ef9a9a'>1046</StatsDataNumber>}{'\n'}infected</StatsDescription>
          <StatsDescription style={ { paddingHorizontal: 40 } }>{<StatsDataNumber color='#e53935'>87</StatsDataNumber>}{'\n'}deaths</StatsDescription>
          <StatsDescription>{<StatsDataNumber color='#38ef7d'>46</StatsDataNumber>}{'\n'}recovered</StatsDescription>
        </CaseUpdateContainer>
        <SectionTitle>Top 10 countries</SectionTitle>

        <CaseUpdateContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <CountriesContainer color='#5e35b1'>
              <Text>USA</Text>
            </CountriesContainer>
            <CountriesContainer color='#1de9b6'>
              <Text>BRAZIL</Text>
            </CountriesContainer>
            <CountriesContainer color='#ffd600'>
              <Text>ITÁLIA</Text>
            </CountriesContainer>
            <CountriesContainer color='#2962ff'>
              <Text>CHINA</Text>
            </CountriesContainer>
          </ScrollView>
        </CaseUpdateContainer>
      </BottomContainer>
    </RootContainer>
  );
}

export default Main;
