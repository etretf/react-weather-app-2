import './App.css';
import Weather from './weather';

function App() {
  return (
    <div className="App">
      <div className="container">
           <Weather defaultCity="New York"/>
    <footer>
      <a href="https://github.com/etretf/react-weather-app-2" target="_blank">Open source code</a>
      <span> by Emma Souannhaphanh</span>
    </footer>
    </div>
    </div>
  );
}

export default App;
