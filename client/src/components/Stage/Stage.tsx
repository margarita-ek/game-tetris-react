import React from 'react'
import Cell from '../Cell/Cell'
import { TETROMINOS } from '../../setup'

export type STAGECELL = [keyof typeof TETROMINOS, string]
export type STAGE = STAGECELL[][]

type StageProps = {
  stage: STAGE
}

const Stage: React.FC<StageProps> = ({ stage }) => { 
  return (
    <div className='tetris__stage'>
      {stage.map(row => row.map((cell, x) => <Cell key={x} type={cell[0]} /> ))}
    </div>
  )
}

export default Stage