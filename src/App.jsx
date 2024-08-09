
import MainApp from "./componenets/MainApp"
import { CartsProvider } from "./context/ContextCarts"

function App() {

  return (
    <div >
      <CartsProvider>
       <MainApp/>
      </CartsProvider>
       
    </div>
  )
}

export default App
