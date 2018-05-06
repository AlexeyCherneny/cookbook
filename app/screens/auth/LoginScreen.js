import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

import Fonts from '../../../constants/Fonts';

const FlexContainer = styled.View`
  flex: 1;
  justifyContent: center;
  alignItems: center;
`;

const RecipeText = styled.Text`
  color: red;
  fontSize: 18;
`;

const BottomButtonWrapper = styled.View`
  flex: 0.2;
  flexDirection: row;
`;

const Button = styled.TouchableOpacity`
  justifyContent: center;
  alignItems: center;
  flex: 1;
  backgroundColor: ${({ color }) => color}
`;

export default class LoginScreen extends Component {
  state = {}

  render() {
    return (
      <FlexContainer>
        <FlexContainer>
          <Text style={Fonts.authTitle}>CookBook </Text>
        </FlexContainer>
        <FlexContainer>
          <FlexContainer>  
            <Text style={Fonts.authWelcomeTitle}>
              Welcome 
            </Text>
          </FlexContainer> 
          <FlexContainer>  
            <Text style={Fonts.authWelcomeText}>
              Start your <RecipeText>C1 ook</RecipeText> way
            </Text>
          </FlexContainer> 
        </FlexContainer>

        <FlexContainer>
          <BottomButtonWrapper>
            <Button color='#f73859'>
              <Text style={Fonts.buttonAuth}>Sign-Up</Text>
            </Button>
            <Button color='#f73859'>
              <Text style={Fonts.buttonAuth}>Sign-Up</Text>
            </Button>
          </BottomButtonWrapper>
        </FlexContainer>
      </FlexContainer>
    );
  }
}
