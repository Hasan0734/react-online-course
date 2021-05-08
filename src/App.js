
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Navigation ></Navigation>
      <Shop></Shop>
    </div>
  );
}

export default App;
