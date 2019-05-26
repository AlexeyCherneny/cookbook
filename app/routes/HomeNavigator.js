import React from 'react';
import { TabNavigator } from 'react-navigation';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

import { ProfileScreen, CategoriesScreen } from '../screens';

const NavbarDefaultStyle = {
  backgroundColor: 'red',
  marginTop: 20,
};

const TitleDefaultStyle = {
  color: 'white',
  fontSize: 20,
};

export default TabNavigator(
  // {
  //   Home: {
  //     screen: HomeScreen,
  //     navigationOptions: ({ navigation }) => ({
  //       title: 'Home',
  //       headerStyle: NavbarDefaultStyle,
  //       headerRight: (
  //         <Button title='add' onPress={() => navigation.navigate('CreateRecipe')}>
  //           <MaterialIcons
  //             name='add-circle'
  //             size={30}
  //           />
  //         </Button>
  //       ),
  //       tabBarIcon: ({ tintColor }) => (
  //         <FontAwesome
  //           name="home"
  //           size={25}
  //           color={tintColor}
  //         />
  //       ),
  //     }),
  //   },
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: ({ navigation }) => ({
        title: 'Categories',
        headerStyle: NavbarDefaultStyle,
        headerTitleStyle: TitleDefaultStyle,
        headerRight: (
          <MaterialIcons
            name="add-circle"
            style={{
              marginRight: 10,
            }}
            onPress={() => navigation.navigate('CreateCategory')}
            size={35}
            color="white"
          />
        ),
        tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={25} color={tintColor} />,
      }),
    },
    // NotificationsScreen: {
    //   screen: NotificationsScreen,
    //   navigationOptions: () => ({
    //     headerStyle: NavbarDefaultStyle,
    //     header: {
    //       style: { backgroundColor: 'red' },
    //     },
    //     tabBarIcon: ({ tintColor }) => (
    //       <MaterialIcons
    //         name='notifications'
    //         size={25}
    //         color={tintColor}
    //       />
    //     ),
    //   }),
    // },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: () => ({
        headerStyle: NavbarDefaultStyle,
        headerTitleStyle: TitleDefaultStyle,
        title: 'Profile',
        tabBarIcon: ({ tintColor }) => (
          <MaterialIcons name="account-circle" size={25} color={tintColor} />
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
