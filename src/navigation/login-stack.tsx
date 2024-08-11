import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SCREENS} from '../constant/screen';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={SCREENS.Home} component={Home} />
      {/* <Stack.Screen name={SCREENS.AUTH_ACTION} component={AuthAction} />
      <Stack.Screen name={SCREENS.AUTH} component={Auth} />
      <Stack.Screen name={SCREENS.ONBOARDING} component={CompleteProfile} /> */}
    </Stack.Navigator>
  );
};

export default React.memo(LoginStack);
