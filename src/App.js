import './App.css';
import GeneralStyle from './generalStyles';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <GeneralStyle />
      {/* <div className='container'>
        <h1>hello</h1>
        <button>Click me</button>
      </div> */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
