import './App.css';
import HomePage from './Components/HomePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import TemporaryDrawer from './Components/Slider';
import Consultancy from './Components/Consultancy';

function App() {
  return (
    <div className="App">
      
      <TemporaryDrawer/>
      {/* <HomePage /> */}
      <Consultancy />
    </div>
  );
}

export default App;
