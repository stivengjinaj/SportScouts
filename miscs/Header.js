import {View, Text, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {Spacer} from "./Spacer";

export function Header({title, onBack = () => {}}) {
    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={onBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Spacer marginHorizontal={10} />
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

const styles = {
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginVertical: 35,
        borderBottomWidth: 1,
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        textAlign: "center",
        marginLeft: 75,
    },
};