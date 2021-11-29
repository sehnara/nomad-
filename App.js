import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

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
import Tab from "./src/navigation/Tab";
import Stack from "./src/navigation/Stack";

export default function Appr() {
  const [fonts] = Font.useFonts(FontAwesome5.font);
  const [assets] = useAssets([require("./asset/test.png")]);

  if (!fonts || !assets) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        {/* <Tab /> */}
        <Stack />
      </NavigationContainer>
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
