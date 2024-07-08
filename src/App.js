import React,{useState} from 'react'
import Header from './Component/Header'
import UserInput from './Component/UserInput'
import Result from './Component/Result'

const App = () => {
  const[userInput, setUserInput]= useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10

})
const inputIsValid=userInput.duration>=1

function handleChange(inputIdentifier,newValue){
  setUserInput((prevUserInput)=>{
    return {
        ...prevUserInput,
        [inputIdentifier]:+newValue
    }
  })
}
  return (
    <div>
      <Header/>
      <UserInput onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className='center'>Please enter right duration period greater than zero.</p>}
      {inputIsValid && <Result inputs={userInput}/>}
    </div>
  )
}

export default App
