import React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ICONS } from '../../Constants/icons';
import UniversalButton from '../../Components/universalButton';
import Header from '../../Components/Header';

const RecommendationScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../../Assets/Icons/Recommendation-bg.png')} // Update the path to your image
      style={styles.background}
    >
      <Header />

      {/* Circular Button with Green Plus Sign */}
      <View style={styles.Button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('OnboardingScreen')}
          style={styles.circleButton}
        >
          <ICONS.GreenPlus style={styles.plusIcon} /> {/* Use your GreenPlus component */}
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={styles.subtitle}>Fusarium Is Detected</Text>
        <Text style={styles.recommendation}>Recommendation: Healthy</Text>
        <Text style={styles.confidence}>Confidence: 1.00</Text>

        <View style={styles.buttonContainer}>
          <UniversalButton
            label="View Prescription"
            onPress={() => navigation.navigate('OnboardingScreen')}
            buttonStyle={styles.buttonStyle}
            arrowIcon={<ICONS.largeArrow />}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 18,
    marginBottom: -390,
  },
  subtitle: {
    paddingTop: 70,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff', // Adjust text color for visibility
  },
  recommendation: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#fff', // Adjust text color for visibility
  },
  confidence: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
    color: '#fff', // Adjust text color for visibility
    paddingBottom: 0,
  },
  buttonContainer: {
    paddingVertical: '4%',
    marginTop: '8%',  
  },
  buttonStyle: {
    width: '98%' ,
    paddingVertical: 20,
    paddingHorizontal: 35,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom: 60,
    justifyContent: 'space-around',
  },
  Button: {
    backgroundColor: 'white', // Background color of the circular button
    height: 45,
    width: 45,
    borderRadius: 30,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    top: 4,
    marginTop: 450,
  },
  circleButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusIcon: {
    fontSize: 20, // Adjust size of the plus sign
  },
});

export default RecommendationScreen;