import { StyleSheet } from "react-native";


export const useStyles = () => {

    return StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: 30
        },
        img: {
            height: 180,
            width: 180,
        },
        startButton: {
            backgroundColor: 'black',
            width: 180,
            paddingVertical: 20,
            borderRadius: 20,
            alignItems: 'center',
        },
        startButtonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        footer: {
            paddingBottom: 40,
            flexDirection: 'row',
            gap: 3
        },
        footerText: {
            fontWeight: 'bold'
        }
    })
}

