import { StyleSheet, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { Button, Text } from '@rneui/themed';

export default function Login(props) {
    const { navigation } = props;

    return (
        <View style={styles.container}>
            <Text h4>Login Page</Text>

            <Text>Happy coding!</Text>
            <Button
                ViewComponent={LinearGradient}
                linearGradientProps={{
                    colors: ['#FFBDDB', '#FF9ABE', '#CF99FF', '#978EEF'],
                    start: { x: 0, y: 0.5 },
                    end: { x: 1, y: 0.5 },
                }}
                onPress={() =>
                    navigation.navigate('Home')
                }
            >
                Goto Home
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
