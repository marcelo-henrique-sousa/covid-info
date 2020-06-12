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

function Main({ navigation }) {

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
      sortedCountries.slice(0,10);
      setCountries(sortedCountries);
    }

    loadGlobalSummary();
  }, []);

  //App functions...
  function NumberFormat(labelValue) {
    // Nine Zeroes for Billions
    return Math.abs(Number(labelValue)) >= 1.0e+9

      ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
      // Six Zeroes for Millions 
      : Math.abs(Number(labelValue)) >= 1.0e+6

        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3

          ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"

          : Math.abs(Number(labelValue));
  }

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
              onPress={() => navigation.navigate('Details')}
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
          onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue); setCurrentCountry(countries[itemIndex])}}
        >
          { countries.map( ( item, index ) => <Picker.Item key={index} label={item.Country} value={item.CountryCode} /> || <Picker.Item label="Global" value="gl" /> ) }
        </Picker>
        <CaseUpdateContainer>
          <StatsDescription>
            {
              <StatsDataNumber color='#ef9a9a'>
                {String(NumberFormat(currentCountry.TotalConfirmed)) || "0"}
              </StatsDataNumber>
            }{'\n'}infected
            </StatsDescription>
          <StatsDescription style={ { paddingHorizontal: 30 } }>
            {
              <StatsDataNumber color='#e53935'>
                {String(NumberFormat(currentCountry.TotalDeaths)) || "0"}
              </StatsDataNumber>
            }{'\n'}deaths</StatsDescription>
          <StatsDescription>
            {
              <StatsDataNumber color='#38ef7d'>
                {String(NumberFormat(currentCountry.TotalRecovered)) || "0"}
              </StatsDataNumber>
            }{'\n'}recovered</StatsDescription>
        </CaseUpdateContainer>
        <SectionTitle>Top 4 countries</SectionTitle>

        <CaseUpdateContainer>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} >
            <CountriesContainer color='#5e35b1'>
              <SubTitle>{countries.length > 0 ? countries[0].Country : "wait"}</SubTitle>
            </CountriesContainer>
            <CountriesContainer color='#e64a19'>
              <SubTitle>{countries.length > 0 ? countries[1].Country : "wait"}</SubTitle>
            </CountriesContainer>
            <CountriesContainer color='#2962ff'>
              <SubTitle>{countries.length > 0 ? countries[2].Country : "wait"}</SubTitle>
            </CountriesContainer>
            <CountriesContainer color='#1de9b6'>
              <SubTitle>{countries.length > 0 ? countries[3].Country : "wait"}</SubTitle>
            </CountriesContainer>
          </ScrollView>
        </CaseUpdateContainer>
      </BottomContainer>
    </RootContainer>
  );
}

export default Main;
