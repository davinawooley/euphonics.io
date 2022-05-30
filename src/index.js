import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from "./components/App";


const container = document.getElementById("root");
ReactDOM.hydrateRoot(container, <App />);