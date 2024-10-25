import './App.css';
import Header from './Header';
import CandyContainer from './CandyContainer';

function App() {
  const headingTitle = 'Charlies Chocolate Factory';
  return (
    <div className="App">
      <Header headingText = {headingTitle}/>
      <CandyContainer/>
    </div>
  );
}

export default App;
