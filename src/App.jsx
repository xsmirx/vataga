import {useState} from 'react'
import './App.css'
import {Header} from './components/Header'

function App() {
  const [findValue, setFindValue] = useState('')

  const handleGangeFind = (e) => {
    setFindValue(e.target.value)
  }

  return (
    <div className="container m-auto px-4">
      <Header findeValue={findValue} handleGangeFind={handleGangeFind} />
      <main></main>
    </div>
  )
}

export default App
