import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Pg1 from './pages/Pg1'
import Pg2 from './pages/Pg2'
import Pg3 from './pages/Pg3'
import './styles/css/App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />    
            <section>
              <Route exact path="/tool-1" component={Pg1} />
              <Route exact path="/tool-2" component={Pg2} />
              <Route exact path="/tool-3" component={Pg3} />
            </section>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;