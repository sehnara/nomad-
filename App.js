import AppLoading from "expo-app-loading";
import React, { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
// 1. FONT
import * as Font from "expo-font";
import { IonIcons } from "@expo/vector-icons";

// 2. ASSET
import { Asset } from "expo-asset";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const loadFonts = (fonts) => {
    fonts.map((font) => Font.loadAsync(font));
  };
  const loadAssets = (images) => {
    images.map((image) => {
      if (typeof image === "string") {
        Image.prefetch(image);
      } else {
        Asset.loadAsync(image);
      }
    });
  };
  const startLoad = async () => {
    const fonts = loadFonts([IonIcons.font]);
    const assets = loadAssets([
      require("./asset/test.png"),
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/%EC%BC%80%EC%9D%B4%EC%8B%9C.jpg/440px-%EC%BC%80%EC%9D%B4%EC%8B%9C.jpg",
    ]);
    await new Promise([...fonts, ...assets]);
  };

  if (isLoading) {
    return (
      <AppLoading
        startAsync={startLoad}
        onError={() => console.warn}
        onFinish={() => setIsLoading(false)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
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
