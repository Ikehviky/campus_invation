import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './utils/supabase';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import About from './pages/About'

function App() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route
          path="/signin"
          element={!session ? <SignIn /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/signup"
          element={!session ? <SignUp /> : <Navigate to="/dashboard" />}
        />
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/admin"
          element={<Dashboard />}
        />
        <Route
          path="/manager"
          element={<Dashboard />}
        />
      </Routes>
    </Router>
  );
}

export default App;