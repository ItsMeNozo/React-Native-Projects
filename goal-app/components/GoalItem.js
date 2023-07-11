import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                android_ripple={{ color: '#430877' }}
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        borderWidth: 1,
        borderRadius: 6, /* for rounded corners */
        borderColor: '#cccccc',
        margin: 3,
        flexDirection: 'row',
        backgroundColor: '#9b5de5',
    },
    goalText: {
        color: 'white', /*text color */
        padding: 6,
    },
    pressedItem: {
        opacity: 0.5
    }
}); 