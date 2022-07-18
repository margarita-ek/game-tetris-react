import React from 'react'

type Props = {
  gameOver?: boolean
  text: string
};

const Display: React.FC<Props> = ({ gameOver, text }) => { 
  return (
    <div className={`displayGame${gameOver ? " red" : ""}`}>
      {text}
    </div> 
  )
}

export default Display
