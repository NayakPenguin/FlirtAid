import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


// let fileInput = document.querySelector('#file-input');
// let numOfFiles = document.querySelector("#num-of-files");
// console.log(fileInput);
// console.log(numOfFiles);


// numOfFiles.textContent = `${fileInput.files.lenght} Images Selected`;
// numOfFiles.textContent = "Fuck";

