import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useStyles } from './Styles'



const StartScreen = ({ navigation }) => {

    const styles = useStyles()

    const playGame = () => {
        navigation.navigate('Board')
    }
    return (
        <View style={styles.container}>
            <View style={styles.container}>
                <Image source={require('../Images/ticIcon.png')} style={styles.img} />
                <TouchableOpacity
                    style={styles.startButton}
                    onPress={playGame}
                >
                    <Text style={styles.startButtonText}>
                        Start Game
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text>
                    Developed By
                </Text>
                <Text style={styles.footerText}>
                    Usman Khalil
                </Text>
            </View>
        </View>
    )
}

export default StartScreen