import './App.css';
import Chrono from './components/Chrono/Chrono';
import Countdown from './components/Countdown/Countdown';
import DigitalClock from './components/DigitalClock/DigitalClock';

const App = () => {
  return (
    <div className="App">
      <DigitalClock/>
      <Countdown/>
      <Chrono/>
    </div>
  );
}

export default App;
