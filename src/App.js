// import logo from './logo.svg';
import './App.css';
import Forecast from './Components/Forecast/Forecast';
import Info from './Components/Info'
import SearchBar from './Components/SearchBar';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Forecast />
    </div>
  );
}

export default App;
