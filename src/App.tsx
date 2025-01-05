import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Card } from './Card';
import { Books } from './Books';
import { Home } from './Home';
import { NotFound } from './NotFound';

function App() {
  return (
    <Router>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Typescript + React Router 6 + SCSS</h1>
      <ul className="menu">
        <li className="menuItem">
          <NavLink to="/home">home</NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/card">card</NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/books">books</NavLink>
        </li>
        <li className="menuItem">
          <NavLink to="/something">something</NavLink>
        </li>
      </ul>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/card" element={<Card />} />
          <Route path="/books" element={<Books />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <p className="read-the-docs">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla in
        assumenda optio at, reiciendis soluta praesentium. Ratione obcaecati
        illum vitae quia recusandae quibusdam nostrum, quaerat tempora
        doloremque quam. Deserunt id natus possimus saepe tempore quod. Eos quos
        porro voluptate minus dignissimos, dicta modi aut incidunt quo sed
        consectetur nostrum natus!
      </p>
    </Router>
  );
}

export default App;
