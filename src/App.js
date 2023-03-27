// import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import Info from './Components/Info'
import SearchBar from './Components/SearchBar';

function handleOnSearchChange(searchData){
  console.log(searchData)
}

function App() {
  return (
    <div className="App">
      <SearchBar
        onSearchChange={handleOnSearchChange}
      />
      <Forecast />
    </div>
  );
}

export default App;
