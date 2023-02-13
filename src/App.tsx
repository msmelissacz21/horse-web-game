import './App.css';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'

function Stub() {
  return <h2>stub</h2>;
}
 
function App() {
  return (
    <div className="App">
      <Router>
       <div>
         <nav>
           <ul>
             <li>
               <Link to="/test">stub</Link>
             </li>
           </ul>
         </nav>
        <Routes>
          <Route path="/test" element={<Stub />} />
        </Routes>
       </div>
      </Router>
    </div>
  );
}

export default App;
