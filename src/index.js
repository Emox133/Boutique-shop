import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {ClothesProvider} from './context'
import App from './App';

ReactDOM.render(
<ClothesProvider>
    <Router>
        <App />
    </Router>
</ClothesProvider>
,document.getElementById('root'));


