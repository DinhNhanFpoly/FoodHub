import React from 'react';
import { SafeAreaView, StatusBar, Text, View, } from 'react-native';
//Import code màn hình chờ, login
import Wellcom from './src/Welcome';
function App(): React.JSX.Element {
  return (
    <SafeAreaView >
      <StatusBar />
      <View>
          <Wellcom/>
      </View>
    </SafeAreaView>
  );
}
export default App;