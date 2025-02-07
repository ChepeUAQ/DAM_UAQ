import { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {
  const [checked, setChecked] = useState({
    checked1: false,
    checked2: false,
    checked3: false,
    checked4: false
  });

  const to_dos = [
    {id:'ch1', title: 'Leche'}, 
    {id:'ch2', title: 'Huevos'},
    {id:'ch3', title: 'Jamón'},
    {id:'ch4', title: 'Pan'}];

  const checkedHandler = (item_id) => {
    setChecked((prevState) => ({
      ...prevState,
      [item_id]: !prevState[item_id]
    }));
  }

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
          <View>
            {
              to_dos.map(to_do => (
                <CheckBox key={to_do.id} title={to_do.title} textStyle={{fontSize: 25}} containerStyle={styles.checkbox} onPress={() => checkedHandler(to_do.id)} checked={checked[to_do.id]} />
              ))
            }
          </View>
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
