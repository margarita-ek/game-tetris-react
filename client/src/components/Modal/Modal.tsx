import React, { useContext, useState } from "react";
import { useHttp } from "../../hooks/http.hook";
import { AuthContext } from "../../context/AuthContext";
interface ModalProps {
  level: number
  rows: number
  score: number
  setShowModal: Function
  setScore: Function
  setStage: Function
  createStage: Function
}
interface Form {
    score: number
    rows: number
    level: number
}

const Modal: React.FC<ModalProps> = (props) => {
  const { level, rows, score, setShowModal, setScore, setStage, createStage } = props
  const { request } = useHttp()
  const auth = useContext(AuthContext)

  const [formStatistics] = useState<Form>({
      score,
      rows,
      level
  })    

  const statisticsHandler = async () => { 
      try {
          console.log('formStatistics', formStatistics)
          const data = await request(
            "/api/statistics",
            "POST",
            { ...formStatistics },
            {
              Authorization: `Bearer ${auth.token}`
            }
          )
          console.log("data", data.message)
      } catch (error) { }
  }    

  const buttonClick = () => { 
      statisticsHandler()
      setShowModal(false)
      setScore(0)
      setStage(createStage())        
  }  

  return(
    <div className="ModalWrapper">
      <div className="ModalWindow">
        <div className="ModalTitle">Statistics</div>
        <div className="ModalBody">{`Level: ${level}`}</div>
        <div className="ModalBody">{`Rows: ${rows}`}</div>
        <div className="ModalBody">{`Score: ${score}`}</div>
        <button onClick={buttonClick}>Close</button>
      </div>
    </div>
  )
}

export default Modal