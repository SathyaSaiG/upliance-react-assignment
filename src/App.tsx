import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import UserForm from './components/UserForm';
import RichTextEditor from './components/RichTextEditor';

const App: React.FC = () => {
  return (
    <div>
      <nav style={{ padding: '10px', background: '#eee' }}>
        <Link style={{ margin: '0 10px' }} to="/">Home</Link>
        <Link style={{ margin: '0 10px' }} to="/counter">Counter</Link>
        <Link style={{ margin: '0 10px' }} to="/user-form">User Form</Link>
        <Link style={{ margin: '0 10px' }} to="/rich-text">Rich Text Editor</Link>
      </nav>
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<div>Welcome! Select a page from the navigation above.</div>} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/user-form" element={<UserForm />} />
          <Route path="/rich-text" element={<RichTextEditor />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
