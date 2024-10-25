import './App.css';
import Header from './Header';
import MeetingList from './MeetingList';

function App() {
  const headingTitle = 'Charlies Chocolate Factory';
  return (
    <div className="App">
      <Header headingText = {headingTitle}/>
      <MeetingList/>
    </div>
  );
}

export default App;
