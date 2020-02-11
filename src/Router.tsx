import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './pages/App';

const Router: React.FC = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
  </BrowserRouter>
);

export default Router;
