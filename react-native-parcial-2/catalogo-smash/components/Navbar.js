import { View, Text, Image } from "react-native";

import styles from "../styles/styles";

export default function Navbar() {
    return (
        <View style={styles.navbar_view}>
            <Text style={styles.navbar_text}>DATOS SMASH</Text>
        </View>
    );
};
