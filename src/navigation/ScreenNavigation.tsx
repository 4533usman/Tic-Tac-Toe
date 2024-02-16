import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import StartScreen from '../screens/StartScreen'
import Board from '../screens/GameBoard/Board'

const Stack = createNativeStackNavigator()

const ScreenNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        elevation: 0,
                        shadowOpacity: 0,
                        borderBottomWidth: 0,
                    },
                    headerTitleAlign: 'center',
                    headerShown: false
                }}
                initialRouteName="Tic Tac Toe">
                <Stack.Screen name='Tic Tac Toe' component={StartScreen} />
                <Stack.Screen name='Board' component={Board} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default ScreenNavigation