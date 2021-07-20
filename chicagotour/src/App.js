import './App.css';
import Title from './Title';
import PLACESList from './PLACESList';
import Footer from './Footer';
import About from './About';
import PLACESDetails from './PLACESDetails';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Title />
        <Route exact path="/" component={PLACESList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/details/:id" component={PLACESDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
