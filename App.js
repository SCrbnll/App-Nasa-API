import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/views/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071a5d',
  },
});