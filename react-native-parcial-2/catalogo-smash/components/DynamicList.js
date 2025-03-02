import { Text, View, FlatList, Image } from "react-native";

import characterData from "../data/data";
import styles from "../styles/styles";

export default function DynamicList() {
    return (
        <FlatList style={styles.flatlist}
        
            data={characterData}
            keyExtractor={(item) => item.id.toString()}

            renderItem={
                ({item}) => (
                    <View style={styles.data_view}>
                        <Image style={styles.char_icon} source={{uri: item.icon}}/>
                        <View style={[{backgroundColor: item.predominantColor}, styles.char_info]}>
                            
                            <Text style={styles.char_name}>{item.charName.toUpperCase()}</Text>

                            <View style={styles.char_series_view}>
                                <Text style={styles.from_text}>FROM: </Text>
                                <Text style={styles.char_series_text}>{item.gameSeries.toUpperCase()}</Text>
                            </View>
                        </View>
                    </View>
                )
            }

        />
    );
}
