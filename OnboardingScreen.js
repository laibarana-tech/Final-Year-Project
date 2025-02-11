import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import UniversalButton from '../UniversalButton';
import { useNavigation } from '@react-navigation/native';
const OnboardingScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../asserts/Onbording/Onbording-background.png')} // Path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Let's Begin Your Smart Farming Journey</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>Empowering Farmers Through Smart Technology</Text>

        {/* Get Started Button */}
        <UniversalButton
        label="GET STARTED"
        onPress={() => navigation.navigate('Language')}
        
      />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // Cover the entire screen
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
   // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
    padding: 20,
  },
  title: {
    
    marginTop: 420,
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3D5300',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    paddingLeft: 50 ,
    paddingRight: 50,
    margin: 0 ,
    fontSize: 18,
    color: '#00000',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4CAF50', // Green color for the button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  buttonText: {
    
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default OnboardingScreen;
