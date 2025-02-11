import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import LanguageScreen from './screens/LanguageScreen';
import OnboardingScreen from './screens/OnbordingScreen';

const Stack = createStackNavigator();

const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
        <Stack.Navigator initialRouteName="Language">
        <Stack.Screen
          name="Language"
          component={LanguageScreen}
          options={{ headerShown: false }}
        />
        </Stack.Navigator>
        <Stack.Navigator initialRouteName="Onbording">
        <Stack.Screen
          name="Onbording"
          component={OnboardingScreen}
          options={{ headerShown: false }}
          
        />
        </Stack.Navigator>
       
    </NavigationContainer>
  );
};

export default App;
