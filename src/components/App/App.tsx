import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from '../Home';
import { NotFound } from '../NotFound';
import { Project } from '../Project';
import { Header } from '../Header';
import { Footer } from '../Footer';
import './App.scss';

export const App = () => {
  return (
    <Router
      basename="/projects-presentation"
      future={{ v7_relativeSplatPath: false }}
    >
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/project/:code" element={<Project />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};
