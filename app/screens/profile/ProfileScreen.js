import React from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';

import { fetchUserInfo } from './actions';
import { logout } from '../auth/actions';
import styles from './styles/ProfileScreen';

@connect(state => ({
  userId: state.user.info.id,
  profile: state.profile,
}), {
  fetchUserInfo,
  logout,
})
class ProfileScreen extends React.Component {
  async componentWillMount() {
    await this.props.fetchUserInfo({ userId: this.props.userId });
  }
  
  render() {
    const avatar = this.props.profile.userInfo.avatar;
    const fullName = this.props.profile.userInfo.fullName;
    const provider = this.props.profile.userInfo.providerData ? this.props.profile.userInfo.providerData.provider : '';
    const email = this.props.profile.userInfo.email;

    return (
      <View style={styles.root}>
        <View style={styles.headerContainer}>
          <View style={styles.imageContainer}>
            <Image resizeMode='cover' style={styles.avatar} source={{ uri: avatar }} />
          </View>
          <View style={styles.userContainer}>
            <View style={styles.userContainerItem}>
              <Text>
                Name:
              </Text>
              <Text style={styles.fullName}>
                {fullName}
              </Text>
            </View>
            <View style={styles.userContainerItem}>
              <Text>
                Mail:
              </Text>
              <Text style={styles.fullName}>
                {email}
              </Text>
            </View>
            <View style={styles.userContainerItem}>
              <Text>
                Auth:
              </Text>
              <Text style={styles.fullName}>
                {provider}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <View style={styles.profileInfoBlock}>
            <Text style={styles.profileInfoBlockContainerTitle}> Moto: </Text>
            <View style={styles.profileInfoBlockContainer}>
              <Text style={styles.profileInfoBlockInfo}>
                Hope dies last
              </Text>
            </View>
          </View>
          <View style={styles.profileInfoBlock}>
            <Text style={styles.profileInfoBlockContainerTitle}> Info: </Text>
            <View style={styles.profileInfoBlockContainer}>
              <Text style={styles.profileInfoBlockInfo}>
                A lot of interesting information about me, lolololo, ololol, kek, pek, trololo
              </Text>
            </View>
          </View>
        </View>
        {/* <Button title='Logout' onPress={this.props.logout} /> */}
      </View>
    );
  }
}

export default ProfileScreen;
