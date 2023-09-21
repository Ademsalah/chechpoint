import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Cards from './components/Cards' 
import Formulaire from './components/Formulaire'

import Navigation from "./components/Navigation"
function App() {
  return (
    <div style={{ marginLeft: '20px', marginRight: '20px' }}>
  <Navigation></Navigation>
<br/>
<div className='cars'>
<Cards></Cards>
<Cards></Cards>
<Cards></Cards>
<Cards></Cards>
<Cards></Cards>

  </div>
    
<br/>
      <Formulaire></Formulaire>
    <footer style={{ marginTop: '20px', textAlign: 'center' }}>
        <p>&copy; {new Date().getFullYear()} Your Company Name</p>
      </footer>
    </div>
  
  );
}


export default App;
