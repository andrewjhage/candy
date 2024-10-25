import './App.css';
import Header from './Header';
import MeetingList from './MeetingList';

function App() {
  const headingTitle = 'CIT 313 Introduction To React';
  return (
    <div className="App">
      <Header headingText = {headingTitle}/>
      <MeetingList/>
    </div>
  );
}

export default App;
