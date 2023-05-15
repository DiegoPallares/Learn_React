import { useState } from 'react'
import confetti from "canvas-confetti"
import './App.css'

import {Square} from "./Componentes/Square.jsx"
import {Turnos, Winner_combos} from "./constants.js"
import { WinnerModal } from './Componentes/WinnerModal'

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  )
  
  //Inicializamos un estado con el turno del jugadopr "X"
  const [turn, setTurn] = useState(Turnos.X)
  // no hay ganador y false empate, true ganador
  const [winner, setWinner] = useState(null) 

  const checkWinner = (boardToCheck) =>{

    //Verificamos quien gano cada vez que se realiza un nuevo click
    for (const combo of Winner_combos){

      const [a, b, c] = combo
      if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
        console.log(`Combos ${combo}`)
        console.log(`Combos ${a}`)
        console.log(`Combos ${b}`)
        console.log(`Combos ${c}`)
        console.log(`entro al if ${boardToCheck[a]}`)
        return boardToCheck[a] //Sabemos quien gano
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(Turnos.X)
    setWinner(null)
  }

  const checkEndGame = (newBoard) => {
    return newBoard.every((square) => square != null)
  }

  const updateBoard = (index) => {
    console.log(`Posicion ${index}`)
    //Valida si esta libre la casilla para retornar, si ya tiene algo o existe ganador que salga.
    if(board[index] || winner)return
    
    //Realizamos una nueva copia del tablero para no modificar el original porque estaria mal
    const newBoard = [... board]
    console.log(`Estado Board ${newBoard}`)
    newBoard[index] = turn
    setBoard(newBoard)
    
    //Cambiar turno
    const newTurn = turn === Turnos.X ? Turnos.o : Turnos.X
    console.log(`El turno es de ${newTurn}`)
    setTurn(newTurn)
    //Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    console.log(`Estado de ganar: ${newWinner}`)
    
    if(newWinner){
      confetti()
      //alert(`El ganador es el jugador ${newWinner}`)
      setWinner(newWinner)
    }else if(checkEndGame(newBoard)){
      setWinner(false)
    }
  }
  
  
  return (
    <main className='board'>
      <h1>Game - Triqui</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className='game'>
      {
        board.map((_,index) => {
          return(
            <Square
              key={index}
              index ={index}
              updateBoard={updateBoard}
            >
              {board[index]}
              </Square>
          )
        })
      }
      </section>
      <section className='turn'>
        <Square isSelected={turn === Turnos.X} >{Turnos.X}</Square>
        <Square isSelected={turn === Turnos.o} >{Turnos.o}</Square>
      </section>
      
      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )
}

export default App
