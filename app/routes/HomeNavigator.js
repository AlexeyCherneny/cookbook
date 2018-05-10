import React from 'react';
import { View, Button, Alert } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';

import Touchable from '@appandflow/touchable';

import { HomeScreen, NotificationsScreen, ProfileScreen } from '../screens';

const NavbarDefaultStyle = {
  backgroundColor: 'red',
  marginTop: 20,
};

// const AddButton = styled.Touchable`
//   marginRight: 10;
// `;

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Home',
        headerStyle: NavbarDefaultStyle,
        headerRight: (
          <Button title='add' onPress={() => {
            // console.log('Nav was ')
            // Alert.alert('You tapped the button!');
            return navigation.navigate('CreateRecipe')
          }
          }>
            <MaterialIcons
              name='add-circle'
              size={30}
            />
          </Button>
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
        title: 'Profile',
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
