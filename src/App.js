import About from './Components/About/About';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';

import './responsive.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
