import { useState } from 'react'
import './App.css'
import SquareComp from './components/SquareComp'

function App() {
/*   const [count, setCount]=useState<number>(0)
  const [bgColor, setbgColor] = useState<string>("#fff") */

  const [box,setBox]=useState({
    count:0,
    color:"#fff"
  })

  const randomColor=():string=>{
    const colors:number[]=[];
    for(let i=0;i<3;i++){
      colors.push(Math.floor(Math.random()*256))
    }
    return `rgb(${colors[0]},${colors[1]},${colors[2]})`
  }

/*   const incCount=()=>{
    setCount(prev=>prev+1)
  }
  const createColor=()=>{
    setbgColor(randomColor())
  } */
  const incCount=()=>{
    setBox  (prev=>({...prev, count:prev.count+1}))
  }

  const resetAll=()=>{
    setCount(0)
    setbgColor("#fff")
  }

  return (
    <main>
      <header>
        <h1>Színes számláló doboz</h1>
        <h3>Színkód: <span>{bgColor}</span></h3>
      </header>
      <main>
        <SquareComp bgColor={bgColor} squareCount={count} incFunction={incCount}/>
        <section>
          <button onClick={createColor}>Színez</button>
          <button onClick={resetAll}>Töröl</button>
        </section>
      </main>
    </main>
  )
}

export default App
