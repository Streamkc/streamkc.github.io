import React, {StrictMode} from 'react';
import ReactDom from 'react-dom/client';
import App from 'app.js';
import 'app.css';

const container= document.getElementById("root");
const client= ReactDom.createRoot(root);
client.render(<App />);
