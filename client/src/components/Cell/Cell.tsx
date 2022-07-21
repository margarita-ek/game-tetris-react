import React from 'react'
import { TETROMINOS } from '../../setup'

type CellProps = {
  type: keyof typeof TETROMINOS
};

interface style { 
  [key:string]: string
}

const Cell: React.FC<CellProps> = ({ type }) => { 
  const style: style = {
    'width': 'auto',
    'background': `rgba(${TETROMINOS[type].color}, 0.8)`,
    'border': `${type === 0 ? '0px solid' : '4px solid'}`,
    'borderBottomColor': `rgba(${TETROMINOS[type].color}, 0.1)`,
    'borderRightColor': `rgba(${TETROMINOS[type].color}, 1)`,
    'borderTopColor': `rgba(${TETROMINOS[type].color}, 1)`,
    'borderLeftColor': `rgba(${TETROMINOS[type].color}, 0.3)`  
  }

  return (
    <div style={style}></div>
  )
}

export default React.memo(Cell);