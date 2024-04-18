import React from 'react';
import { Route, Router } from 'expo-router';
import HomePage from './pages/HomePage';

export default function App() {
  return (
    <Router>
      <Route path="/" component={HomePage} />
    </Router>
  );
}