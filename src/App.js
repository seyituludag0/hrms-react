import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Dashboard from "./layouts/Dashboard"
import Footer from "./layouts/Footer"
import Navi from './layouts/Navi';
import { Container } from 'semantic-ui-react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

function App() {
  return (
    <div className="App">
      <Navi />
      <Container className="main">
      </Container>
      <Dashboard />
      {/* <Footer /> */}


    </div>
  );
}

export default App;
