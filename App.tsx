import React, {useState} from 'react';

import {NativeBaseProvider} from 'native-base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox, StatusBar} from 'react-native';
import {persistor, store} from './src/redux/store';
import AppNavigation from './src/navigation';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import NoNetwork from './src/screens/no-network';
import colors from './src/config/colors';
import SplashScreen from './src/screens/splashscreen';

const toastConfig = {
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'green', padding: 0}}
      contentContainerStyle={{
        paddingHorizontal: 10,
        paddingVertical: 0,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      text1Style={{
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
      }}
    />
  ),
  error: (props: any) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17,
      }}
      text2Style={{
        fontSize: 15,
      }}
    />
  ),
};

LogBox.ignoreAllLogs();

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  const [isSplashRunning, setIsSplashRunning] = useState(true);

  return (
    <SafeAreaProvider
      style={{flex: 1, paddingBottom: 34, backgroundColor: colors.background}}>
      <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
      <NoNetwork />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NativeBaseProvider>
            {isSplashRunning ? (
              <SplashScreen setIsSplashRunning={setIsSplashRunning} />
            ) : (
              <AppNavigation />
            )}
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
      <Toast position="bottom" config={toastConfig} />
    </SafeAreaProvider>
  );
}

export default App;
