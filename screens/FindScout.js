import {View, TextInput, KeyboardAvoidingView, ScrollView} from "react-native";
import {Header} from "../miscs/Header";
import {useNavigation} from "@react-navigation/native";
import {Spacer} from "../miscs/Spacer";
import {useState} from "react";
import {CustomButton} from "../miscs/CustomButton";

export default function FindScout() {
    const navigation = useNavigation();
    const [sport, setSport] = useState("");
    const [experience, setExperience] = useState("");
    const [location, setLocation] = useState("");
    const [mainLanguage, setMainLanguage] = useState("");
    const [secondaryLanguage, setSecondaryLanguage] = useState("");
    const [formValid, setFormValid] = useState(false);

    const validateForm = () => {
        if (sport !== "" && experience !== "" && location !== "" && mainLanguage !== "") {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={"height"}
        >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Header title={"Find a Scout"} onBack={() => navigation.navigate("BottomBar")} />
                <Spacer marginVertical={10} />
                <View style={styles.body}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => {
                            setSport(value);
                            validateForm();
                        }}
                        value={sport}
                        placeholder={"Sport..."}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => {
                            setExperience(value);
                            validateForm();
                        }}
                        value={experience}
                        inputMode={"numeric"}
                        placeholder={"Experience..."}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => {
                            setLocation(value);
                            validateForm();
                        }}
                        value={location}
                        placeholder={"Preferred Location..."}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => {
                            setMainLanguage(value);
                            validateForm();
                        }}
                        value={mainLanguage}
                        placeholder={"Main Language..."}
                    />
                    <TextInput
                        style={styles.textInput}
                        onChangeText={(value) => {
                            setSecondaryLanguage(value);
                            validateForm();
                        }}
                        value={secondaryLanguage}
                        placeholder={"Secondary Language..."}
                    />
                    <Spacer marginVertical={20} />
                    <CustomButton
                        navigation={navigation}
                        title={"Find Scout"}
                        destination={"BottomBar"}
                        active={formValid}
                        buttonStyle={{ width: 150, height: 50 }}
                        textStyle={{ fontSize: 16, fontWeight: "bold" }}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = {
    body: {
        flex: 1,
        alignItems: "center",
    },
    iconInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
    textInput: {
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 5,
        width: 300,
        height: 50,
        margin: 30,
        alignItems: "center",
    },
};