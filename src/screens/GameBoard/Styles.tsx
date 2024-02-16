import { StyleSheet } from "react-native";


export const useStyles = () => {

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        gameBtn: {
            borderBlockColor: "black",
            borderWidth: 1,
            width: 80,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
        },
        gameRow: {
            flexDirection: 'row'
        },
        gameText: {
            fontSize: 50,
            fontWeight: 'bold',
            // color: 'orange',
        },
        resetButton: {
            backgroundColor: 'black',
            width: 180,
            paddingVertical: 20,
            borderRadius: 20,
            alignItems: 'center',
            marginTop: 10,
        },
        resetBtnText: {
            color: 'white',
            fontWeight: 'bold'
        }
    })
}

