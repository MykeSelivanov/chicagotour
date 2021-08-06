import './App.css';
import PageHeader from './PageHeader/PageHeader';
import PLACESList from './PLACESList/PLACESList.js';
import Footer from './Footer';
import About from './About/About';
import PLACESDetails from './PLACESDetails/PLACESDetails';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <PageHeader />
        <Route exact path="/" component={PLACESList} />
        <Route exact path="/about" component={About} />
        <Route exact path="/details/:id" component={PLACESDetails} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
