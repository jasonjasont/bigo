import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ResultComponent} from "./views/resultComponent";
import {SurveyComponent} from "./views/surveyComponent";




const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route>
                    
                    <Route path="/result" element={<ResultComponent/>}/>
                    <Route path="*" element={<SurveyComponent/>}/>
                    
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();

