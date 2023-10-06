// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import Login from "./Screen/Authentication/Login";

// export default function App() {
//   return (
//     <View>
//       <Login />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
import * as React from 'react';
import { View } from 'react-native';
import { useFonts } from 'expo-font';
import Login from "./Screen/Authentication/Login";

export default function App() {
  const [loaded] = useFonts({
    boorsok: require('./assets/fonts/boorsok.ttf'),
    glacialindi: require("./assets/fonts/GlacialIndifference-Regular.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View>
      <Login />
    </View>
  );
}
