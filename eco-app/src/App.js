import logo from './logo.svg';
import './App.css';
import { Nav } from './Components/NavBar/Nav';
import { AllRoute } from './Page/AllRoute';

function App() {
  return (
    <div className="App">
      <Nav/>
      <AllRoute/>
    </div>
  );
}

export default App;
