import logo from './assets/FoxelUniverseHeader.jpg';
import './App.css';
import Whitepaper from './Whitepaper';
import useScript from './useScript';

function App() {
  useScript('https://platform.twitter.com/widgets.js');
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a href="https://twitter.com/FoxelUniverse?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @FoxelUniverse</a>
      </header>
      <Whitepaper />
    </div>
  );
}

export default App;
