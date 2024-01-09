import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './components/Routes/routes';
import ParentComponent from './components/Iframe_Situation/parentComponent';
import Home from './components/Home';

function App() {
  return (
    <div className='App'>
      <Router>
        <AppRoutes></AppRoutes>
      </Router>
    </div>
  );
}

export default App;
