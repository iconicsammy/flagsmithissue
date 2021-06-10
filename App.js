import {StatusBar} from 'expo-status-bar';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import FlagsmithConfigurations from './FlagsmithConfigurations';

const App = () => {
  useEffect(() => {
   FlagsmithConfigurations.initializeFlagSmith();
  }, []);
  return <Text>Sample</Text>;
};

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(App));

export default App;
