import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar_view}>
        <Text style={styles.navbar_text}>Qrobus</Text>    
      </View>

      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar_view: {
    backgroundColor: '#f8f8f8',
    height: '10%',
    width: '100%',
    marginTop: 0,
    textAlign: 'justify',
    justifyContent: 'center',
  },
  navbar_text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 20
  }
});
