import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Green Life Hospital";
  }, [])
  return (
    <div className="App">
      <h1>This is app js</h1>
    </div>
  );
}

export default App;
