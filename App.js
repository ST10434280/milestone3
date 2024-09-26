/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import home from './screens/home';
import AboutUs from './screens/AboutUs';
import Month6 from './screens/Month6';
import FirstAid from './screens/FirstAid';
import sewing from './screens/sewing';
import Landscaping from './screens/Landscaping';
import LifeSkills from './screens/LifeSkills';
import Week6 from './screens/Week6';
import ChildMinding from './screens/ChildMinding';
import Cooking from './screens/Cooking';
import GardenMaintenance from './screens/GardenMaintenance';
import courses from './screens/courses';
import Stories from './screens/Stories';
import Contact from './screens/Contact';
import SignUp from './screens/SignUp';

const Stack = createNativeStackNavigator();

function App(){
  return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={home}/>
        <Stack.Screen name='AboutUs' component={AboutUs}/>
        <Stack.Screen name='Courses' component={courses}/>
        <Stack.Screen name='6 Month Courses' component={Month6}/>
        <Stack.Screen name='FirstAid' component={FirstAid}/>
        <Stack.Screen name='Sewing' component={sewing}/>
        <Stack.Screen name='Landscaping' component={Landscaping}/>
        <Stack.Screen name='Life Skills' component={LifeSkills}/>
        <Stack.Screen name='6 Week Courses' component={Week6}/>
        <Stack.Screen name='Child Minding' component={ChildMinding}/>
        <Stack.Screen name='Cooking' component={Cooking}/>
        <Stack.Screen name='Garden Maintenance' component={GardenMaintenance}/>
        <Stack.Screen name='Stories' component={Stories}/>
        <Stack.Screen name='ContactUs' component={Contact}/>
        <Stack.Screen name='SignUp' component={SignUp}/>
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;