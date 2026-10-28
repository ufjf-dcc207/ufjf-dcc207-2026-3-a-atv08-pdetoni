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
  },
  {
    id:"0b3c6774-a8f6-47bf-a93f-376a1a7bda33",
    largura: 40.0,
    altura: 20.0,
    profundidade: 10.0,
    peso:3.14
  }
]

function App() {

  return (
    <>
      <h2>Pacotes</h2>
      <div className='pacotes'>
        {data.map(p=><Pacote pacote={p} key ={p.id}/>)}
      </div>
    </>
  )
   
}

export default App
