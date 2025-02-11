import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const UniversalButton = ({ label, onPress, showArrow = true, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, buttonStyle]} // Apply default and custom styles
      onPress={onPress}
    >
      <Text style={[styles.text, textStyle]}>{label}</Text>
      {showArrow && <Text style={[styles.arrow, textStyle]}>&rarr;</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3D5300', // Default background color
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    elevation: 10, // Shadow for Android
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 3,
    position: 'absolute', // Position the button absolutely
    bottom: 40, // Distance from the bottom
    alignSelf: 'center', // Center horizontally
  },
  text: {
    color: '#FFFFFF', // Default text color
    fontSize: 17,
    fontWeight: '600', // Semi-bold
  },
  arrow: {
    marginLeft: 150, // Space between text and arrow
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '900', // Semi-bold
  },
});

export default UniversalButton;
