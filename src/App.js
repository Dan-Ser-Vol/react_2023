import './App.css';
import Simpsons from './components/Simpsons/Simpsons';
import RickAndMorty from './components/RickAndMorty/RickAndMorty';


function App() {
    return (
        <div className="App">
            <h1>_____________________________________Simpsons______________________________________</h1>
            <Simpsons/>
            <h2>_________________________________Rick And Morty________________________________</h2>
            <RickAndMorty/>
            <h2>__________________________________The End___________________________</h2>
        </div>
    );
}

export default App;
