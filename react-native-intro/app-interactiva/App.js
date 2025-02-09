import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SearchBar, CheckBox } from '@rneui/themed';
import { StyleSheet, Text, View, ScrollView, useColorScheme, TouchableOpacity } from 'react-native';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

export default function App() {

  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState(systemTheme || 'light'); 
  
  const rutas = [
    {id:'R1', title:'T01', desc: 'TERMINAL BALVANERA - LOS HÉROES'},
    {id:'R2', title:'T02', desc: 'LA PRADERA - SAN JOSÉ DE LOS OLVERA'},
    {id:'R3', title:'T03', desc: 'PRADOS DEL SOL - FRACC. VISTANA'},
    {id:'R4', title:'T04', desc: 'DESARROLLO FAMILIAR - T.A.Q.'},
    {id:'R5', title:'T05', desc: 'LA CAÑADA - LOS OLVERA'},
    {id:'R6', title:'T06', desc: 'T.A.Q. - LOS JUNCOS'},
    {id:'R7', title:'T07', desc: 'BLVD. DE LAS AMÉRICAS - FRACC. VISTANA'},
    {id:'R8', title:'T08', desc: 'SANTA ROSA JÁUREGUI - T.A.Q.'},
    {id:'R9', title:'T09', desc: 'BLVD. PEÑA FLOR - T.A.Q.'},
    {id:'R10', title:'T10', desc: 'HACIENADA MOMPANÍ - CRIQ QUERÉTARO'},
    {id:'R11', title:'C21', desc: 'LAS FLORES - FRACC. FRAY JUNÍPERO SERRA'},
    {id:'R12', title:'C22', desc: 'FRACC. SANTUARIOS - PENAL'},
    {id:'R13', title:'C23', desc: 'LOMAS DE LA CRUZ - T.A.Q.'},
    {id:'R14', title:'C24', desc: 'LA PRADERA - BOSQUES DEL CIMATARIO'},
    {id:'R15', title:'C25', desc: 'EL POZO - HOSP. DEL SAGRADO CORAZÓN DE JESÚS'},
    {id:'R16', title:'L100', desc: 'TERMINAL BALVANERA - AV. DE LA LUZ'},
    {id:'R17', title:'L101', desc: 'TERMINAL BALVANERA - IMSS H. GENERAL NO. 1'},
    {id:'R18', title:'L102', desc: 'VALLE DORADO - TERMINAL BALVANERA'},
    {id:'R19', title:'L103', desc: 'EL POZO - UAQ AEROPUERTO'},
    {id:'R20', title:'L104', desc: 'LA PRADERA - ZIBATA'},
  ]

  const [search, setSearch] = useState("");

  const [checked, setChecked] = useState({});

  const isAnyChecked = Object.values(checked).some(value => value === true);

  
  const updateSearch = search => {
    setSearch(search || "");
  };

  const checkedHandler = item_id => {
    setChecked((prevState) => ({
      ...prevState,
      [item_id]: !prevState[item_id]
    }));
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <View style={styles.container}>
      <View style={theme === 'dark' ? dark_styles.navbar_view : styles.navbar_view}>
        <Text style={theme === 'dark' ? dark_styles.navbar_text : styles.navbar_text}>Qrobus</Text>   
        <TouchableOpacity style={styles.navbar_touchable}>
          <Text style={theme === 'dark' ? dark_styles.navbar_touchable_text : styles.navbar_touchable_text} onPress={toggleTheme}>🌗</Text>
        </TouchableOpacity> 
      </View>

      <SearchBar placeholder="Ruta..."
        lightTheme={theme === 'dark' ? false : true}
        round={true}
        onChangeText={updateSearch}
        value={search}
        inputStyle={{color: theme === 'dark' ? '#fff' : '#000'}}
      />

      {
        isAnyChecked ? <Favoritas rutasFav={checked} rutas={rutas} theme={theme}/> : null
      }

      <ScrollView style={theme === 'dark' ? dark_styles.rutas_view : styles.rutas_view}>
        {
          rutas
          .filter(item => 
            item.title?.toLowerCase().includes(search?.toLowerCase())
          ).map(item => (
            <View style={styles.ruta_view}>

              <CheckBox
                checkedIcon='bookmark'
                uncheckedIcon='bookmark-o'
                key={item.id}
                title={item.title}
                onPress={() => checkedHandler(item.id)}
                checked={!!checked[item.id]}
                containerStyle={{maxWidth: '25%', backgroundColor: theme === 'dark' ? '#000' : '#fff'}}
                textStyle={{color: theme === 'dark' ? '#fff' : '#000'}}
              />

              <Text style={theme === 'dark' ? dark_styles.desc_text : styles.desc_text}>{item.desc}</Text>
            </View>
          ))
        }
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );

}

const Favoritas = ({rutasFav, rutas, theme}) => {
  const rutasSelec = rutas.filter(ruta => rutasFav[ruta.id]);

  return (
    <View style={theme === 'dark' ? dark_styles.checked_routes_view : styles.checked_routes_view}>
      <Text style={theme === 'dark' ? dark_styles.favoritas_text : styles.favoritas_text}>Favoritas</Text>
      {rutasSelec.length > 0 ? (
        rutasSelec.map(ruta => (
          <View style={{flexDirection: 'row', marginBottom: 25}}>
            <Text key={ruta.id} style={{fontWeight: 'bold', marginRight: 15, color: theme === 'dark' ? '#fff' : '#000'}}>{ruta.title}</Text>
            <Text style={{flexShrink: 1 , color: theme === 'dark' ? '#fff' : '#000'}}>{ruta.desc}</Text>
          </View>
        ))
      ) : (
        null
      )}
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '100%'
  },
  navbar_view: {
    backgroundColor: '#f8f8f8',
    height: '10%',
    maxWidth: '100%',
    marginTop: 0,
    flexDirection: 'row'
  },
  navbar_text: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 35
  },
  navbar_touchable: {
    marginStart: '60%',
    marginTop: 40
  },
  navbar_touchable_text: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  rutas_view: {
    padding: 20,
    maxWidth: '100%',
  },
  ruta_view: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: -10,
    maxWidth: '100%'
  },
  checked_routes_view: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    maxWidth: '100%'
  },
  favoritas_text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18, 
    fontWeight: 'bold'
  },
  desc_text: {
    flexShrink: 1, 
    paddingTop: '18',
    marginLeft: -10
  }
});

const dark_styles = StyleSheet.create({
  navbar_view: {
    backgroundColor: '#000',
    height: '10%',
    maxWidth: '100%',
    marginTop: 0,
    flexDirection: 'row'
  },
  navbar_text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginStart: 20,
    marginTop: 35
  },
  navbar_touchable: {
    marginStart: '60%',
    marginTop: 40
  },
  navbar_touchable_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  rutas_view: {
    padding: 20,
    maxWidth: '100%',
    backgroundColor: '#000'
  },
  ruta_view: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: -10,
    maxWidth: '100%',
    backgroundColor: '#000'
  },
  checked_routes_view: {
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
    maxWidth: '100%',
    backgroundColor: '#000'
  },
  favoritas_text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18, 
    fontWeight: 'bold',
    color: '#fff'
  },
  desc_text: {
    flexShrink: 1, 
    paddingTop: '18',
    marginLeft: -10,
    color: '#fff'
  }
});
