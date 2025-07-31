import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionalCounter from './components/FunctionalCounter';

function App() {
  return (
    <div className="app-container">
      <h1 className="main-heading">Assignment-2 Counter Application</h1>
      <div className="counter-row">
        <ClassCounter />
        <FunctionalCounter />
      </div>
    </div>
  );
}

export default App;
