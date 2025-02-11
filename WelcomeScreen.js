import React from 'react';
import { View ,Text,  ImageBackground, StyleSheet, Button } from 'react-native';
import RoundArrowButton from '../RoundArrowButton';
import { useNavigation } from '@react-navigation/native';

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../asserts/images/backgroundalter.png')} // Background image
      style={styles.background}
      
    >
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome</Text>
        <Text style={styles.toText}>To</Text>
        <Text style={styles.titleText}>Chemi Cure!</Text> 
        <RoundArrowButton onPress={() => navigation.navigate('Language')} />
      </View>
      
    </ImageBackground>
  );
};



const styles = StyleSheet.create({
  background: {
    flex: 1,
    fontWeight: 'bold',
    resizeMode: 'cover', // Cover the entire screen
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: 80,
    alignItems: 'center',
    backgroundColor: 'none', // Semi-transparent overlay
  },
  welcomeText: {
    fontSize: 50,
    fontWeight: '900',
    color: '#3D5300',
  },
  toText: {
    fontSize: 40,
    fontWeight: '900',
    color: '#3D5300',
    marginVertical: -8,
  },
  titleText: {
    fontSize: 44.5,
    fontWeight: '900',
    color: '#3D5300',
  },
 
  
});

export default WelcomeScreen;
