import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLayoutConfig } from './redux/layoutSlice';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';

function App() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.auth.role);
  const layoutConfig = useSelector((state) => state.layout.config);

  useEffect(() => {
    if (role) {
      dispatch(fetchLayoutConfig(role));
    }
  }, [role, dispatch]);

  return (
    <Router>
      <div className="app">
        {layoutConfig.header && <Header />}
        <div className="main">
          {layoutConfig.leftNav && <Sidebar />}
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
          </div>
        {layoutConfig.footer && <Footer />}
      </div>
    </Router>
  );
}

export default App;