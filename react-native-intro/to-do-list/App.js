import { CheckBox } from '@rneui/themed';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.main_navbar_view}>
        <Text style={styles.app_title_text}>To-Do List</Text>
      </View>

      <View style={styles.main_view}>
        <View style={styles.title_view}>
          <Text style={styles.title_text}>Lista de Compras</Text>
        </View>
        <ScrollView style={styles.content_view}>
          <CheckBox title="Leche" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Pan" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Huevo" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Jamon" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Queso" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Cereal" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Frutas" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Verduras" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Carne" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Pollo" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Aceite" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
          <CheckBox title="Frijoles" textStyle={{fontSize: 25}} containerStyle={styles.checkbox}/>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  main_navbar_view: {
    backgroundColor: '#16a085',
    height: '10%',
    width: '100%',
    marginTop: 0,
    textAlign: 'justify',
    justifyContent: 'center',
  },
  app_title_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 20
  },
  main_view: {
    height: '90%',
    maxWidth: '100%',
    backgroundColor: '#ecf0f1'
  },
  title_view: {
    height: '20%',
    width: '100%',
    justifyContent: 'center'
  },
  title_text: {
    color: '#000',
    fontSize: 50,
    fontWeight: 900,
    paddingLeft: '12%'
  },
  content_view: {
    height: '90%',
    width: '100%',
    paddingHorizontal: '8%',
    marginBottom: '5%'
  },
  checkbox: {
    backgroundColor: '#ecf0f1',
    borderBottomWidth: 1, 
    borderWidth: 0, 
    borderColor: '#aaaaaa'
  }
});
