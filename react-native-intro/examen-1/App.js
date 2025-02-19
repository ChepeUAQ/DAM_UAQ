import { CheckBox } from '@rneui/base';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function App() {
  const [checks, setChecks] = useState({});
  const [text, setText] = useState(null)

  const list = [
    {'id': 1, title: 'Pollo'},
    {'id': 2, title: 'Jamón'},
    {'id': 3, title: 'Lechuga'},
    {'id': 4, title: 'Pan'},
    {'id': 5, title: 'Mostaza'},
  ]

  const checkedHandler = item_id => {
    setChecks((prevState) => ({
      ...prevState,
      [item_id]: !prevState[item_id]
    }));
  };

  let currentId = 5;

  const addToList = (item) => {
    list[currentId + 1] = item
    currentId++
  }

  return (
    <View style={styles.container}>
      <View style={styles.title_view}>
        <Text style={styles.title_text}>Lista de Compras</Text>
      </View>

      <View style={styles.add_view}>
        <TextInput style={styles.textinput} 
          placeholder='Escribe....' 
          onChangeText={newText => setText(newText)}/>

        <TouchableOpacity style={styles.add_touchable} onPress={() => addToList(text)}>
          <Text style={styles.add_text}>+</Text>
        </TouchableOpacity>
      </View>
      
      <ScrollView>
        {
          list.map(item => (
            <View style={styles.ruta_view}>

              <CheckBox
                title={item.title}
                key={item.key}
                onPress={() => checkedHandler(item.id)}
                checked={!!checks[item.id]}
              />
            </View>
          ))
        }
      </ScrollView>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    padding: '10%'
  },
  title_view: {
    marginTop: 10
  },
  add_view: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  title_text: {
    fontSize: 60,
    fontWeight: 700
  },
  textinput: {
    width: '85%',
    borderWidth: 1,
    borderRadius: 40,
    padding: 15
  },
  add_touchable: {
    width: '16%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    backgroundColor: '#00396b',
    borderRadius: '50%'
  },
  add_text: {
    color: 'white',
    fontSize: 25,
  }
});
