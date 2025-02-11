import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import UniversalButton from '../UniversalButton';
import { useNavigation } from '@react-navigation/native';

const LanguageScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../asserts/SelectLanguage/bgg.png')} // Path to your background image
      style={styles.background}
    >
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>

        {/* Title */}
        <Text style={styles.title}>Select Your Language</Text>

        {/* Language Options */}
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>URDU</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>ENGLISH</Text>
        </TouchableOpacity>

        {/* Onboarding Text */}

        <UniversalButton
        label="ONBORADING"
        onPress={() => navigation.navigate('Onbording')}
        
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
    alignItems: 'center',
  },
  container: {
    flex: 1,
    height: 50,
    padding: 40,
    //backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent overlay
  },
  backButton: {
    alignSelf: 'flex-start',
    marginTop: 40,
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF', // White color for visibility on the background
  },
  title: {
   
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 150,
    marginBottom: 80,
    color: '#3D5300', // White color for visibility on the background
  },
  languageButton: {
    backgroundColor: '#3D5300',
    padding: 16,
    borderRadius: 40,
    marginVertical: 13,
    alignItems: 'center',
    elevation: 10, // Shadow for Android
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  languageText: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
  },
 
});

export default LanguageScreen;
