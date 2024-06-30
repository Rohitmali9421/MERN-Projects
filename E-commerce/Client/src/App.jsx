import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import Pages from './Components/MainPage/Pages'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </>
  )
}

export default App
