import './App.css'
import Pacote from './Pacote.tsx'
import type { PacoteType } from './types.ts'

const data:Array<PacoteType> = [
  {
    id:"7fb1fde1-e4eb-4bf8-84b6-448c0d57b443",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso:2.34
  }
]

function App() {

  return (
    <>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        <Pacote pacote={data[0]}/>
      </div>
    </>
  )
   
}

export default App
