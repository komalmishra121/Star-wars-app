import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import LoginPage from './pages/LoginPage';
import SearchPage from './pages/SearchPage';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
