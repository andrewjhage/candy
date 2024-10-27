// Importing the CSS file, the Header component and the CandyContainer component files
import './App.css';
import Header from './Header';
import CandyContainer from './CandyContainer';

// Defines a constant variable that holds the  title text for the header
function App() {
  const headingTitle = 'Charlies Chocolate Factory';
  // returns the JSX code for the App component
  return (
    <div className="App">
      <Header headingText = {headingTitle}/>
      <CandyContainer/>
    </div>
  );
}
// Exports the App component to be imported in other files
export default App;
