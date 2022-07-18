import React from 'react'

type StartButtonProps = {
  callback: () => void
}

const StartButton: React.FC<StartButtonProps> = ({ callback }) => (
  <div className='startButton' onClick={callback}>Start Game</div>
)

export default StartButton
