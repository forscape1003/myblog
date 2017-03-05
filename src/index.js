import React from 'react';
import {render} from 'react-dom';

import App from './App.js';
import Routers from './Routers'
import 'highlight.js/styles/atom-one-light.css';
// import './main.css';
import './post.css';

render(<Routers />,document.getElementById('root'));
