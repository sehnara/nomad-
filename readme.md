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

## 2. Stack Navigation

[참고] React-navigation > https://reactnavigation.org/docs/native-stack-navigator

- stack navigator이 옵션은 더 많다.
- flow는 동일, 그러나 navigation props를 확인할 것!

# [Styled Components]

## 1. 설치

1. npm i styled-components
2. import styled from "styled-components/native"

## 2. 장점

1. 각 컴포넌트에 특정한 이름을 설정해줄 수 있다.
2. 'react-native'에서 컴포넌트들을 import 안해도 된다.
3. props 사용이 가능하다.

## 3. Theme

1. style object 생성 : styled.js에서 object만들고 export 해줌
2. (App.js) <ThemeProvider theme ={}>
3. App.js 하단 컴포넌트에서 props로 받아옴
