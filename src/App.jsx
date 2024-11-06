import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const cardNumbers = [1,2,3,4,5];
  return (
    <>
     <div className='Container'>
        {
          cardNumbers.map((card)=>{
            return <Card key={card} cardNumber= {card} />
          })
        }
     </div>
    </>
  )
}
function Card({cardNumber}){
  return (
    <div className= {`Card Card-${cardNumber}`}>

    </div>
  )
}
export default App
