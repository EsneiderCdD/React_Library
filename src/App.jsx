import './App.css'
import CardReutilizable from './ejercicios/Componentes y Props/Soluciones/1.PropType'

function App() {


  return (
    <>

    <CardReutilizable name="Carlos" age={30} email="carlos@email.com" />
    <CardReutilizable name="Ana" age={25} email="ana@email.com" />
    <CardReutilizable name={null} age={null} email="john@email.com" />
    
    

   
    </>
  )
}

export default App
