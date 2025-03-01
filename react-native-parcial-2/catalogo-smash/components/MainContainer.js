import { Text, View } from "react-native";

import styles from "../styles/styles";
import DynamicList from "./DynamicList";
import Navbar from "./Navbar";

export default function MainContainer() {
    return (
        <View style={styles.container}>
            <Navbar/>
            <DynamicList/>
        </View>
    );
}