import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useStyles } from './Styles'

const Board = () => {
  const intialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]


  const styles = useStyles()
  const [gamingBoard, setGamingBoard] = useState(intialBoard)
  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState('')

  useEffect(() => {
    checkWinner()
  }, [gamingBoard])

  const isBoardComplete = gamingBoard.every((row) => row.every((cell) => cell === ''))

  const handlePress = (rowIndex: any, colIndex: any) => {
    if (gamingBoard[rowIndex][colIndex] === '' && !winner) {
      const newBoard = [...gamingBoard]
      newBoard[rowIndex][colIndex] = player
      setGamingBoard(newBoard)
      setPlayer(player === 'X' ? 'O' : 'X')
    }
  }

  const checkWinner = () => {
    //Checkong for the winner in Row 
    for (let i = 0; i < 3; i++) {
      if (
        gamingBoard[i][0] !== '' &&
        gamingBoard[i][0] === gamingBoard[i][1] &&
        gamingBoard[i][0] === gamingBoard[i][2]
      ) {
        setWinner(gamingBoard[i][0])
        break;
      }
    }
    //Checking for the winner in Col 
    for (let i = 0; i < 3; i++) {
      if (
        gamingBoard[0][i] !== '' &&
        gamingBoard[0][i] === gamingBoard[1][i] &&
        gamingBoard[0][i] === gamingBoard[2][i]
      ) {
        setWinner(gamingBoard[0][i])
        break;
      }
    }
    //Checking for the Winner in Diagonals
    if (
      gamingBoard[0][0] !== '' &&
      gamingBoard[0][0] === gamingBoard[1][1] &&
      gamingBoard[0][0] === gamingBoard[2][2]
    ) {
      setWinner(gamingBoard[0][0])
    }
    else if (
      gamingBoard[0][2] !== '' &&
      gamingBoard[0][2] === gamingBoard[1][1] &&
      gamingBoard[0][2] === gamingBoard[2][0]
    ) {
      setWinner(gamingBoard[0][2])
    }
  }

  const resetGameBoard = () => {
    setGamingBoard(intialBoard)
    setPlayer('X')
    setWinner('')
  }


  useEffect(() => {
    if (winner) {
      Alert.alert(`Player ${winner} is Winner `, ' ', [{ text: 'OK', onPress: resetGameBoard }])
    }
  }, [winner]);
  useEffect(() => {
    const isBoardComplete = gamingBoard.every((row) => row.every((cell) => cell !== ''))
    if (isBoardComplete) {
      Alert.alert(`It\'s Tie Match `, ' ', [{ text: 'OK', onPress: resetGameBoard }])
    }
  }, [gamingBoard]);

  return (
    <View style={styles.container}>
      {gamingBoard.map((item: any, rowIndex) => {
        return <View style={styles.gameRow}>
          {item.map((i: any, colIndex: React.Key) =>
          (
            <TouchableOpacity key={colIndex} style={styles.gameBtn} onPress={() => handlePress(rowIndex, colIndex)}>
              <Text style={styles.gameText}>{i}</Text>
            </TouchableOpacity>
          )
          )}
        </View>
      }
      )}
      {!isBoardComplete ? (<TouchableOpacity
        style={styles.resetButton}
        onPress={resetGameBoard}
      >
        <Text style={styles.resetBtnText}>Reset Game</Text>
      </TouchableOpacity>) : null}
    </View>
  )
}

export default Board