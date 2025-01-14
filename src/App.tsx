import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <>
      <div className="min-h-screen bg-amber-50">
        <Header />
        <Home/>


        
        <main className="pt-28 p-4">

        </main>

        <footer className="bg-dark mt-5 py-5">
          <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">Cervecería Klug Gebräu - Todos los derechos Reservados</p>
          </div>
        </footer>

      </div>

    </>
  )
}

export default App



