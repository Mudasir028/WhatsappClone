import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        padding: 10,
        borderBottomColor: 'grey',
        // borderBottom: 2
    },
    leftContainer: {
        flexDirection: "row"

    },
    midContainer: {
        justifyContent: "space-around",
        marginRight: 10,

    },
    avatar: {
        width: 60,
        height: 60,
        borderColor: "#000",
        borderRadius: 50,
        backgroundColor: "#000",
        marginRight: 10
    },
    name: {
        fontWeight: "bold",
        fontSize: 18,
        color: "#000"
    },
    lastMessage: {
        color: "grey",
        fontSize: 16,
    },
    time: {
        color: "grey",
        fontSize: 14,
    },
});

export default styles;