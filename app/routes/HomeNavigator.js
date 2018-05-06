import React from 'react';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import { HomeScreen, NotificationsScreen, ProfileScreen } from '../screens';

const NavbarDefaultStyle = {
  backgroundColor: 'red',
};

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'ewfwef',
        headerStyle: NavbarDefaultStyle,
        headerRight: (
          <TouchableOpacity style={{ marginRight: 3 }} onPress={() => navigation.navigate('CreateRecipe')}>
            <MaterialIcons
              name='add-circle'
              size={30}
              color='#ff'
            />
          </TouchableOpacity>
        ),
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome
            name="home"
            size={25}
            color={tintColor}
          />
        ),
      }),
    },
    NotificationsScreen: {
      screen: NotificationsScreen,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        header: {
          style: { backgroundColor: 'red' },
        },
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name='notifications'
            size={25}
            color={tintColor}
          />
        ),
      }),
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        title: 'efsefse',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons
            name='account-circle'
            size={25}
            color={tintColor}
          />
        ),
      }),
    },
  },
  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      inactiveTintColor: 'blue',
      activeTintColor: 'red',
      pressColor: 'red',
      indicatorStyle: { backgroundColor: 'red' },
      style: {
        backgroundColor: 'white',
      },
    },
  }
);
