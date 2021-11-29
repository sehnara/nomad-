# [INTRO]

## 1. 설치

#### npx create-react-native-app

## 2. App Loading

### 1) 설치 : expo install expo-app-loading

### 2) font :

#### 1> 설치 : expo install expo-font

### 3) Image(GLOBAL), Asset(LOCAL) :

#### 1> 설치 : expo install expo-asset

#### 2> Asset.loadAsync(require(""))

#### 3> Image.prefetch(URL)

### 4) HOOKS

#### 1> const [font] = FONT.useFonts()

#### 2> const [asset] = useAssets([])

<hr/>

# [NAVIGATION]

## 1. Tab Navigation

[참고] React-navigation > https://reactnavigation.org/docs/bottom-tab-navigator/

### 1) flow

(1) npm install @react-navigation/bottom-tabs - (2) navigator, screen 구성 - (3) App.tsx에서 NavigationContainer 깔아주고 그 안에 기존의 tab nav 넣어줌
