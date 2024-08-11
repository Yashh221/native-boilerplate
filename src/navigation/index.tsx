import React, {useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';

// import { useStore } from "../redux/useStore";
import LoginStack from './login-stack';

const AppNavigation = () => {
  //   const store: any = useStore();

  const navigationRefStack = useRef<any>();
  //   const navigationRefTab = useRef<any>();
  const routeNameRefStack = useRef<any>();
  //   const routeNameRefTab = useRef<any>();

  //   if (store?.user?.isLoggedIn && store?.user?.isOnboarded) {
  //     return (
  //       <NavigationContainer

  //         ref={navigationRefTab}
  //         onReady={() => {
  //           routeNameRefTab.current =
  //             navigationRefTab.current.getCurrentRoute().name;
  //         }}
  //         onStateChange={() => {
  //           const currentRouteName =
  //             navigationRefTab.current.getCurrentRoute().name;

  //           routeNameRefTab.current = currentRouteName;
  //         }}
  //       >
  //         <AppStack />
  //       </NavigationContainer>
  //     );
  //   }
  //   if (store?.user?.isLoggedIn && !store?.user?.isOnboarded) {
  //     return (
  //       <NavigationContainer
  //         ref={navigationRefStack}
  //         onReady={() => {
  //           routeNameRefStack.current =
  //             navigationRefStack.current.getCurrentRoute().name;
  //         }}
  //         onStateChange={() => {
  //           const currentRouteName =
  //             navigationRefStack.current.getCurrentRoute().name;
  //           routeNameRefStack.current = currentRouteName;
  //         }}
  //       >
  //         <OnboardingStack />
  //       </NavigationContainer>
  //     );
  //   }

  return (
    <NavigationContainer
      ref={navigationRefStack}
      onReady={() => {
        routeNameRefStack.current =
          navigationRefStack.current.getCurrentRoute().name;
      }}
      onStateChange={() => {
        const currentRouteName =
          navigationRefStack.current.getCurrentRoute().name;
        routeNameRefStack.current = currentRouteName;
      }}>
      <LoginStack />
    </NavigationContainer>
  );
};

export default React.memo(AppNavigation);
