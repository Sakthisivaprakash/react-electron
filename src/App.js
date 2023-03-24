import './App.css';
import { ijIcon, ijLogo } from './assets/images';

function App() {
  return (
    <div className="App">
      <header className="App-header">                      
        <div className='IJ-Logo'>
          <img src={ijIcon} className="App-logo" alt="logo" />
          <img src={ijLogo} className="App-logo" alt="logo" />
        </div>      
        <h2>Welcome to Infinijith Apps & Technologies</h2>
        <p>
          To know more about services provided by infinijith. <br />
          click on the link below :)
        </p>
        <a
          className="App-link"
          href="https://www.infinijith.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
