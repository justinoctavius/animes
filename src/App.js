import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Register from './screens/register/Register';
import Login from './screens/login/Login';
import Categories from './components/categories/Categories';
import Home from './screens/home/Home';
import Info from './screens/info/Info';
import Watch from './screens/watch/Watch';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="">
          <Navbar></Navbar>
        </header>
        <main>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
          <Route path='/categorias' component={Categories} />
          <Route path='/watch/:id/:title/:episode' component={Watch} />
          <Route path='/info/:id' component={Info} />
          <Route path='/favoritos' />
        </main>
        <footer className="">

        </footer>
      </div>
    </Router>
  );
}

export default App;
