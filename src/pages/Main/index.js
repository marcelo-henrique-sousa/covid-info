import React, { useState, useEffect } from 'react';
import {
  Text, 
  Image, 
  StyleSheet, 
  Dimensions, 
  ImageBackground,
  TouchableOpacity, 
  StatusBar,
  ScrollView,
  View,} from 'react-native';

//Libs
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Services
import api from '../../services/api';

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
  SubTitle,
  Section,
  SectionTitle,
  StatsDescription,
  StatsDataNumber, } from './styles';

function Main() {

  //states...
  const [selectedValue, setSelectedValue] = useState("Global");
  //api states
  const [globalTracker, setGlobalTracker] = useState({});
  const [countries, setCountries] = useState([]);
  const [currentCountry, setCurrentCountry] = useState({});

  //Effects
  useEffect(() =>{
    async function loadGlobalSummary(){
      const response = await api.get('/summary');
      
      setGlobalTracker(response.data.Global);
      const sortedCountries = response.data.Countries.sort(( a, b )=> a.TotalConfirmed < b.TotalConfirmed ? 1 : -1);
      setCountries(sortedCountries);
    }

    loadGlobalSummary();
  }, []);

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
            <TouchableOpacity
              style={{alignSelf: "auto",marginTop: -230}}
              onPress={() => alert('new screen')}
            >
              <Icon name="menu" size={25} color="#f5f5f5" />
            </TouchableOpacity>
          </ImageBackground>
        </CurvedContainer>
      </TopContainer>
      <BottomContainer>
        <SectionTitle>Case update</SectionTitle>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: screenWidth - 30, elevation: 10, }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          { countries.map( ( item, index ) => <Picker.Item key={index} label={item.Country} value={item.CountryCode} /> || <Picker.Item label="Global" value="gl" /> ) }
        </Picker>
        <CaseUpdateContainer>
          <StatsDescription>
            {
              <StatsDataNumber color='#ef9a9a'>
                {String(globalTracker.TotalConfirmed).slice(0,1) + "M+" || "0"}
              </StatsDataNumber>
            }{'\n'}infected
            </StatsDescription>
          <StatsDescription style={ { paddingHorizontal: 40 } }>
            {
              <StatsDataNumber color='#e53935'>
                {String(globalTracker.TotalDeaths).slice(0,1) + "M+" || "0"}
              </StatsDataNumber>
            }{'\n'}deaths</StatsDescription>
          <StatsDescription>
            {
              <StatsDataNumber color='#38ef7d'>
                {String(globalTracker.TotalRecovered).slice(0,1) + "M+" || "0"}
              </StatsDataNumber>
            }{'\n'}recovered</StatsDescription>
        </CaseUpdateContainer>
        <SectionTitle>Top 4 countries</SectionTitle>

        <CaseUpdateContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <CountriesContainer color='#5e35b1'>
              <SubTitle>{countries[0].Country || "wait"}</SubTitle>
            </CountriesContainer>
            <CountriesContainer color='#e64a19'>
              <SubTitle>{countries[1].Country || "wait"}</SubTitle>
            </CountriesContainer>
            <CountriesContainer color='#2962ff'>
              <SubTitle>{countries[2].Country || "wait"}</SubTitle>
            </CountriesContainer>
            <CountriesContainer color='#1de9b6'>
              <SubTitle>{countries[3].Country || "wait"}</SubTitle>
            </CountriesContainer>
          </ScrollView>
        </CaseUpdateContainer>
      </BottomContainer>
    </RootContainer>
  );
}

export default Main;
