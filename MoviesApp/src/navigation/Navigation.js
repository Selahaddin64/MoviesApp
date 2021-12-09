import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Movies from '../pages/Movies';
import MoviesDetail from '../pages/MoviesDetail';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './routes';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={routes.MOVIES_SCREEN}
          component={Movies}
          options={{
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerBackTitleVisible: false,
            headerTitle: 'Filmler',
          }}
        />
        <Stack.Screen
          name={routes.MOVIES_DETAİL_SCREEN}
          component={MoviesDetail}
          options={{
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerBackTitleVisible: false,
            headerTitle: 'Film Detay',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
