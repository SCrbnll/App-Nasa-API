import { StyleSheet, SafeAreaView } from 'react-native';
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from './src/routes/Routes';

export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Routes />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071a5d',
  },
});