import './App.css'
import BuyCoffee from './sections/BuyCoffee'
import CoffeeDrinks from './sections/CoffeeDrinks'
import DownloadApp from './sections/DownloadApp'
import Footer from './sections/Footer'
import Hero from './sections/Hero'

function App() {

  return (
    <div className="App">
        <Hero/>
      <div className="container">
        <CoffeeDrinks/>
        <BuyCoffee/>
      </div>
      <DownloadApp/>
      <Footer/>
    </div>
  )
}

export default App
