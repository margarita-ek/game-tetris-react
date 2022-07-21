import React from 'react'

interface ModalProps {
  level: number
  rows: number
  score: number
  setShowModal: Function
  setScore: Function
  setStage: Function
  createStage: Function
  statisticsHandler: Function
}
interface Form {
    score: number
    rows: number
    level: number
}

const Modal: React.FC<ModalProps> = (props) => {
  const { level, rows, score, setShowModal, setScore, setStage, createStage, statisticsHandler } = props
  
  let formStatistics = {
      score,
      rows,
      level    
  }

  const buttonClick = () => { 
      if (formStatistics) { 
        statisticsHandler(formStatistics)
      }
      setShowModal(false)
      setScore(0)
      setStage(createStage())        
  }  

  return(
    <div className='modal'>
      <div className='modal__window'>
        <div className='modal__title'>GAME OVER</div>
        <div className='modal__container'>
          <div className='modal__item'>{`Level: ${level}`}</div>
          <div className='modal__item'>{`Rows: ${rows}`}</div>
          <div className='modal__item'>{`Score: ${score}`}</div>          
        </div>
        <button className='modal__button' title='close' onClick={buttonClick}>Close</button>
      </div>
    </div>      
  )
}

export default Modal