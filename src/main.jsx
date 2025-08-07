import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {BrowserRouter} from "react-router-dom";
import {LanguageProvider} from "@/utils/lang/LangContext.jsx";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <LanguageProvider>
            <App/>
        </LanguageProvider>

    </BrowserRouter>,
)
