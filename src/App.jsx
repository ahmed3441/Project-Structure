  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import Main from './components/admin/Index';

  function App() {
    return (
      <div>
      <Router>
          <Routes>
          <Route path="/*" element={<Main />} />
          </Routes>
      </Router>
      </div>
    );
  }
  export default App;
