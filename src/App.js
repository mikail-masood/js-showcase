import './App.css';
import FloatingNav from './components/FloatingNav';
import Landing from './components/Landing';
import SideNav from './components/SideNav';

function App() {
  return (
    <div className="App">
      <Landing/>
      <FloatingNav/>
      <SideNav/>
    </div>
  );
}

export default App;
