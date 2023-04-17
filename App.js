import { StyleSheet, View, StatusBar, Text } from 'react-native';
import React from 'react';
import CalcJourneyCost from './components/CalcJourneyCost';
import GradientBackground from './components/Gradient';



const App = () => {
  return (
    <GradientBackground>
      <View style={styles.container}>
        <StatusBar  backgroundColor="transparent"/>
        <CalcJourneyCost />
      </View>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})
export default App;