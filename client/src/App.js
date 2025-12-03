import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.js';
import Header from './components/Header.js';
import './App.css';

// Lazy load pages for better performance and code splitting
const Home = lazy(() => import('./pages/Home.js'));
const About = lazy(() => import('./pages/About.js'));
const Education = lazy(() => import('./pages/Education.js'));
const Services = lazy(() => import('./pages/Services.js'));
const Projects = lazy(() => import('./pages/Projects.js'));
const Contact = lazy(() => import('./pages/Contact.js'));
const Signup = lazy(() => import('./pages/Signup.js'));
const Signin = lazy(() => import('./pages/Signin.js'));

// Loading component
const LoadingFallback = () => (
  <div style={{ 
    padding: '3rem', 
    textAlign: 'center', 
    fontSize: '1.2rem',
    color: '#667eea'
  }}>
    Loading...
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />

              {/* Example admin route */}
              {/* <Route path="/admin" element={<ProtectedRoute requireAdmin={true}><AdminDashboard /></ProtectedRoute>} /> */}
            </Routes>
          </Suspense>
        </main>
      </AuthProvider>
    </Router>
  );
}

export default App;