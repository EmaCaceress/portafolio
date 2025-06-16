import './App.css';
import AboutMe from './components/AboutMe/Aboutme';  // Asegúrate de que coincide con el nombre exacto del archivo
import Back from './components/Back/Back';
import Header from './components/Header/Header'; // Asegúrate de que el nombre sea "Header.js" con mayúscula
import LoadingScreen from './components/Loading/Loading';
import { GlobalProvider } from './components/Context/Context';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <LoadingScreen/>
        <Header/>
        <AboutMe/>
        <Back/>
      </div>
    </GlobalProvider>
  );
}

export default App;
