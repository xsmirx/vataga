import {useState} from 'react'
import {Header} from './components/Header'
import {Filter} from './components/Filter'

function App() {
  const [findValue, setFindValue] = useState('')

  const handleGangeFind = (e) => {
    setFindValue(e.target.value)
  }

  return (
    <div className="container m-auto px-4">
      <Header findeValue={findValue} handleGangeFind={handleGangeFind} />
      <main>
        <Filter />
      </main>
    </div>
  )
}

export default App
