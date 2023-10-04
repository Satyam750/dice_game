import { styled } from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RoleDice from "./RoleDice"
import { useState } from "react"
import { Button,OutlineButton } from "../styled/Button"
import Rules from "./Rules"



const GamePlay = () => {
const [score, setScore] = useState(0)    

const [selectedNumber, setSeletedNumber] = useState()
const [currentDice , setCurrentDice] = useState(1)
const [error, setError] = useState("")

const [showRules, setShowRules] = useState(false)

const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max - min) + min)
   
}


const roleDice = ()=>{
 if(!selectedNumber){
    setError("You have not selected any number")
    return
 } ;




    const randomNumber = generateRandomNumber(1,7)

     setCurrentDice((prev) => randomNumber)

     if(selectedNumber === randomNumber){
        setScore((prev) => prev + randomNumber)
     }else{
        setScore((prev)=> prev - 2)
     }

     setSeletedNumber(undefined)
}

const resetScore = () =>{
    setScore(0)
}

  return (
    <MainContainer>
    <div className="top_section">
    <TotalScore score={score}/>
    <NumberSelector selectedNumber={selectedNumber} setSeletedNumber={setSeletedNumber} error={error} setError={setError}/>
    </div>
    
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
        
        <div className="btns">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={()=> setShowRules((prev)=>!prev)} >{
            showRules? "Hide":"Show"
        } Rules</Button>

        </div>
        {showRules && <Rules/>}
    </MainContainer>
  )
}

export default GamePlay


const MainContainer = styled.div`
padding-top:70px ;
.top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
}

.btns{
    display: flex;
    flex-direction:column ;
    justify-content: center;
    margin-top: 40px;
    align-items: center;
    gap: 10px;
}

`

