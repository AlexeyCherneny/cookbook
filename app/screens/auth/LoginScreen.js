import React, { Component } from 'react';
import { Text } from 'react-native';
import { Facebook, Google } from 'expo';
import styled from 'styled-components';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import { login } from './actions';
// import { LoadingScreen } from '../../components';

import Fonts from '../../../constants/Fonts';
import fbConfig from '../../../constants/fbConfig';
import googleConfig from '../../../constants/googleConfig';

const FlexContainer = styled.View`
  flex: 1;
  justifycontent: center;
  alignitems: center;
  alignself: stretch;
`;

const RecipeText = styled.Text`
  color: red;
  fontsize: 18;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexdirection: row;
`;

const Button = styled.TouchableOpacity`
  justifycontent: space-around;
  alignitems: center;
  flex: 1;
  backgroundcolor: ${({ color }) => color};
  flexdirection: row;
  paddinghorizontal: 10;
`;

@connect(
  state => ({
    isLoading: state.user.isLoading,
    state,
  }),
  { login }
)
export default class LoginScreen extends Component {
  state = {};

  _onLoginPress = name => {
    if (name === 'facebook') {
      this._logInWithFacebook();
    } else {
      this._logInWithGoogle();
    }
  };

  async _logInWithFacebook() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(fbConfig.APP_ID, {
      permissions: ['public_profile', 'email'],
    });

    if (type === 'success') {
      this.props.login(token, 'facebook');
    } else {
      throw new Error('Something wrong with facebook auth!');
    }
  }

  async _logInWithGoogle() {
    try {
      const result = await Google.logInAsync({
        iosClientId: googleConfig.CLIENT_ID_IOS,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.props.login(result.accessToken, 'google');
      } else {
        return { cancled: true };
      }
    } catch (err) {
      throw err;
    }
  }

  render() {
    console.log('Rendering Loading screen');
    // if (this.props.isLoading) {
    //   return <LoadingScreen color='red' />;
    // }
    return (
      <FlexContainer>
        <FlexContainer>
          <Text style={Fonts.authTitle}>CookBook </Text>
        </FlexContainer>
        <FlexContainer>
          <FlexContainer>
            <Text style={Fonts.authWelcomeTitle}>Welcome</Text>
          </FlexContainer>
          <FlexContainer>
            <Text style={Fonts.authWelcomeText}>
              Start your <RecipeText>Cook</RecipeText> way
            </Text>
          </FlexContainer>
        </FlexContainer>

        <FlexContainer>
          <BottomButtonWrapper>
            <Button color="#db3236" onPress={() => this._onLoginPress('google')}>
              <Text style={Fonts.buttonAuth}>Connect with</Text>
              <MaterialCommunityIcons name="google" size={30} color="#fff" />
            </Button>
            <Button color="#3b5998" onPress={() => this._onLoginPress('facebook')}>
              <Text style={Fonts.buttonAuth}>connect-with</Text>
              <MaterialCommunityIcons name="facebook" size={30} color="#fff" />
            </Button>
          </BottomButtonWrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
