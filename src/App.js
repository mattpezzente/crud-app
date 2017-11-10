import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Pg1 from './pages/Pg1'
import Pg2 from './pages/Pg2'
import Pg3 from './pages/Pg3'
import './styles/css/App.css'

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <Router>
        <div className="App">        
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/tool-1">Tool 1</Link></li>
              <li><Link to="/tool-2">Tool 2</Link></li>
              <li><Link to="/tool-3">Tool 3</Link></li>
            </ul>
            <section>
              <Route exact path="/" component={Home} />
              <Route exact path="/tool-1" component={Pg1} />
              <Route exact path="/tool-2" component={Pg2} />
              <Route exact path="/tool-3" component={Pg3} />
            </section>
        </div>
      </Router>
      <Footer />
      </div>
    );
  }
}

export default App;