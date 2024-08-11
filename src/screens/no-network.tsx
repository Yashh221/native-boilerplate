import React, {PureComponent} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';

var {height, width} = Dimensions.get('window');
const IS_IPHONE_X =
  height === 812 || height === 896 || height === 844 || height === 926;
const IS_IPHONE_SE = height === 568;
const IS_IPHONE_6 = height === 667 || height === 736;
state = {
  isConnected: true,
};

function MiniOfflineSign() {
  return (
    <View style={styles.offlineContainer}>
      <Text style={styles.offlineText}>No Internet Connection</Text>
    </View>
  );
}
class NoNetwork extends PureComponent {
  constructor() {
    super();
    this.state = {
      isConnected: true,
    };

    this.unsubscribeNetworkListener = NetInfo.addEventListener(state => {
      this.setState({isConnected: state.isConnected});
    });
  }

  render() {
    if (!this.state.isConnected) {
      return <MiniOfflineSign />;
    }
    return null;
  }

  componentDidMount() {}

  componentWillUnmount() {
    this.unsubscribeNetworkListener && this.unsubscribeNetworkListener();
  }
}
const styles = StyleSheet.create({
  offlineContainer: {
    backgroundColor: '#b52424',
    height: IS_IPHONE_X ? 64 : 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  offlineText: {
    color: '#fff',
    // fontFamily: ,
    paddingTop: 15,
    paddingBottom: 5,
  },
});
export default NoNetwork;
