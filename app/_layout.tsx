import React, { useEffect } from "react";
import { Stack } from "expo-router";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return <Stack />;
};

export default Layout;
