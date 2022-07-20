import React, { useEffect, useRef, useState } from 'react'
import { createStage, isColliding } from '../../gameHelpers'
import { useInterval } from '../../hooks/useInterval'
import { usePlayer } from '../../hooks/usePlayer'
import { useStage } from '../../hooks/useStage'
import { useGameStatus } from '../../hooks/useGameStatus'
import Stage from '../Stage/Stage'
import Display from '../Display/Display'
import StartButton from '../StartButton/StartButton'
import Modal from '../Modal/Modal'

const Tetris: React.FC = () => {
    const [dropTime, setDroptime] = useState<null | number>(null)
    const [gameOver, setGameOver] = useState(true)
    const [showModal, setShowModal] = useState<boolean>(false)

    const gameArea = useRef<HTMLDivElement>(null)

    const { player, updatePlayerPos, resetPlayer, playerRotate } = usePlayer()
    const { stage, setStage, rowsCleared } = useStage(player, resetPlayer)
    const { score, setScore, rows, setRows, level, setLevel } = useGameStatus(rowsCleared)  

    const movePlayer = (dir: number) => {
        if (!isColliding(player, stage, { x: dir, y: 0 })) {
        updatePlayerPos({ x: dir, y: 0, collided: false })
        }
    }

    const keyUp = ({ keyCode }: { keyCode: number }): void => {
        if (!gameOver) {
        if (keyCode === 40) {
            setDroptime(1000 / level + 200)
        }
        }
    }

    const handleStartGame = (): void => {
        if (gameArea.current) gameArea.current.focus()
        setStage(createStage())
        setDroptime(1000)
        resetPlayer()
        setScore(0)
        setLevel(1)
        setRows(0)
        setGameOver(false)
    }

    const move = ({ keyCode, repeat }: { keyCode: number; repeat: boolean }): void => {
        if (!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if (keyCode === 39) {
                movePlayer(1);
            } else if (keyCode === 40) {
                if (repeat) return;
                setDroptime(30);
            } else if (keyCode === 38) {
                playerRotate(stage);
            }
        }
    }

    const drop = (): void => {
        if (rows > level * 10) {
        setLevel(prev => prev + 1);
        setDroptime(1000 / level + 200)
        }

        if (!isColliding(player, stage, { x: 0, y: 1 })) {
        updatePlayerPos({ x: 0, y: 1, collided: false })
        } else {
        if (player.pos.y < 1) {
            console.log('Game over!')
            setGameOver(true)
            setDroptime(null)
        }
        updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    useInterval(() => {
        drop();
    }, dropTime)

    useEffect(() => { 
        if ( gameOver && ( score > 0)) { 
            setShowModal(true)
        }
    }, [gameOver])

    return (
        <div className='tetris' role='button' tabIndex={0} onKeyDown={move} onKeyUp={keyUp} ref={gameArea}>
            <div className='tetris__content'>
                <div className='tetris__display'>
                {gameOver ? (
                    <>
                    <Display gameOver={gameOver} text='Game Over!' />
                    <StartButton callback={handleStartGame} />
                    </>
                ) : (
                    <>
                    <Display text={`Score: ${score}`} />
                    <Display text={`Rows: ${rows}`} />
                    <Display text={`Level: ${level}`} />
                    </>
                )}
                </div>
                <Stage stage={stage} />
                {showModal ? <Modal
                    level={level}
                    rows={rows}
                    score={score}
                    setShowModal={setShowModal}
                    setScore={setScore}
                    setStage={setStage}
                    createStage={createStage}
                /> : null}
            </div>
        </div>
    )
}

export default Tetris