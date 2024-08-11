import {View} from 'native-base';
import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import colors from '../config/colors';
import Heading from '../components/common/heading';

const SplashScreen = ({setIsSplashRunning}: any) => {
  useEffect(() => {
    setTimeout(() => {
      setIsSplashRunning(false);
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Heading color={colors.white}>Hello World</Heading>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    fontFamily: 'Nunito Sans',
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    color: colors.white,
  },
});
