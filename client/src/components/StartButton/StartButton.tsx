import React from 'react'

type StartButtonProps = {
  callback: () => void
}

const StartButton: React.FC<StartButtonProps> = ({ callback }) => (
  <div className='startButton' title='start game' onClick={callback}>Start Game</div>
)

export default StartButton
