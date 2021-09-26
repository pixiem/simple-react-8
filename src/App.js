import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Player from './components/PlayersAndChoose/players/player';

function App() {
  return (
    <div className="whole-body">
      <Header></Header>
      <Player></Player>
    </div>
  );
}

export default App;
