
import './App.css'
import Search from './components/search/Search.jsx'

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log("weather data")
  }

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
    </div>

  )
}

export default App
