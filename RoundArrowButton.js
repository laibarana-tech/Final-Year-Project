import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const RoundArrowButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.arrow}>&rarr;</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 55,
    height: 55,
    borderRadius: 30,
    margin: 20,
    backgroundColor: '#3D5300',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // spreadness of shadow
    shadowColor: '#3D5300',
    shadowOffset: { width: 10, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 60,
  },
  arrow: {
    
    height: 70,  // to make arrow center
    color: '#FFFFFF',
    fontSize: 40,
    fontWeight: '100', // Thckness of arrow
  },
});

export default RoundArrowButton;
