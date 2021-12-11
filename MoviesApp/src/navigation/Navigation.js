import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Movies from '../pages/Movies';
import MoviesDetail from '../pages/MoviesDetail';
import Comments from '../pages/Comments/comments';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import routes from './routes';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{headerShown: false}}>
        <Drawer.Screen
          name={routes.MOVIES_SCREEN}
          component={Movies}
          options={{
            drawerLabel: 'Movies',
            drawerIcon: ({size, color}) => (
              <Icon name="movie" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
        <Drawer.Screen
          name={routes.MOVIES_DETAİL_SCREEN}
          component={MoviesDetail}
          options={{
            drawerLabel: 'Movies Detail',
            drawerIcon: ({size, color}) => (
              <Icon name="movie-open-outline" color={color} size={size} />
            ),
            drawerActiveTintColor: '#ab47bc',
          }}
        />
        <Drawer.Screen
          name={routes.Comments}
          component={Comments}
          options={{
            headerTintColor: 'black',
            headerTitleStyle: {
              fontWeight: '300',
            },
            headerBackTitleVisible: false,
            headerTitle: 'Filmler',
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
