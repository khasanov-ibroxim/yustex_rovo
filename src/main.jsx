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
import SchemaManager from "@/component/schema/schema_manager.jsx";
import {onCLS, onINP, onLCP} from "web-vitals";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <SchemaManager/>
            <LanguageProvider>
                <App/>
            </LanguageProvider>

        </BrowserRouter>
    </StrictMode>
)
onCLS(console.log);
onINP(console.log);
onLCP(console.log);
