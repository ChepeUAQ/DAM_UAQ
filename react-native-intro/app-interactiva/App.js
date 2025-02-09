import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { SearchBar, CheckBox } from '@rneui/themed';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CardTitle } from '@rneui/base/dist/Card/Card.Title';

export default function App() {

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

  return (
    <View style={styles.container}>
      <View style={styles.navbar_view}>
        <Text style={styles.navbar_text}>Qrobus</Text>    
      </View>

      <SearchBar placeholder="Ruta..."
        lightTheme={true}
        round={true}
        onChangeText={updateSearch}
        value={search}
        inputStyle={{color: 'black'}}
      />

      {
        isAnyChecked ? <Favoritas rutasFav={checked} rutas={rutas}/> : null
      }

      <ScrollView style={styles.rutas_view}>
        {
          rutas
          .filter(item => 
            item.title?.toLowerCase().includes(search?.toLowerCase())
          ).map(item => (
            <View style={styles.ruta_view}>

              <CheckBox
                key={item.id}
                title={item.title}
                onPress={() => checkedHandler(item.id)}
                checked={!!checked[item.id]}
              />

              <Text style={{maxWidth: '70%', paddingTop: '18'}}>{item.desc}</Text>
            </View>
          ))
        }
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );

}

const Favoritas = ({rutasFav, rutas}) => {
  const rutasSelec = rutas.filter(ruta => rutasFav[ruta.id]);

  return (
    <View style={styles.checked_routes_view}>
      <Text style={styles.favoritas_text}>Favoritas</Text>
      {rutasSelec.length > 0 ? (
        rutasSelec.map(ruta => (
          <View style={{flexDirection: 'row', marginBottom: 25}}>
            <Text key={ruta.id} style={{fontWeight: 'bold', marginRight: 15}}>{ruta.title}</Text>
            <Text>{ruta.desc}</Text>
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
    backgroundColor: '#fff',
    maxWidth: '100%'
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
  },
  rutas_view: {
    padding: 20,
    maxWidth: '100%',
  },
  ruta_view: {
    flexDirection: 'row',
    marginBottom: 20,
    marginLeft: -10
  },
  checked_routes_view: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingHorizontal: 25,
    paddingTop: 20
  },
  favoritas_text: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18, 
    fontWeight: 'bold'
  }
});
