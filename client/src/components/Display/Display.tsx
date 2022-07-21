import React from 'react'

type DisplayProps = {
  gameOver?: boolean
  text: string
}

const Display: React.FC<DisplayProps> = ({ gameOver, text }) => { 
  return (
    <div className={`displayGame${gameOver ? ' red' : ''}`}>
      {text}
    </div> 
  )
}

export default Display
