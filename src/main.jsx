import React from "react";
import  ReactDOM  from "react-dom/client";
import { QuoteBox } from "./QuoteBox";
import './assets/css/Quote.css';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <QuoteBox/>
    </React.StrictMode>
);