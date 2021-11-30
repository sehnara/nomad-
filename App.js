import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { StyleSheet } from "react-native";

// 1. FONT
import * as Font from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";

// 2. ASSET
import { Asset, useAssets } from "expo-asset";

// 3. navigationContainer
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import Root from "./src/navigation/Root";

// 4. Themes (styled-components)
import { darkTheme, lightTheme } from "./src/styled";
import useColorScheme from "react-native/Libraries/Utilities/useColorScheme";
import { ThemeProvider } from "styled-components";

export default function App() {
  const [fonts] = Font.useFonts(FontAwesome5.font);
  const [assets] = useAssets([require("./asset/test.png")]);

  const isDark = useColorScheme() == "dark";

  if (!fonts || !assets) {
    return <AppLoading />;
  } else {
    return (
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <NavigationContainer>
          <Root />
        </NavigationContainer>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
