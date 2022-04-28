import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import User from "./core/models/user";
import {AuthProvider} from "./core/auth/auth.contex";
import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import {ProtectedRoute} from "./theme/layouts/ProtectedRoute";
import AuthLayout from "./theme/layouts/Auth";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

let user: User = JSON.parse(localStorage.getItem('user') || '{}');
root.render(
    <AuthProvider user={user}>
        <HashRouter>
            <Routes>
                <Route path={`/auth`} element={<AuthLayout/>} />
               {/* <ProtectedRoute path={`/admin`} component={Auth} />
                <ProtectedRoute path={`/rtl`} component={RTLLayout} />*/}
                <Navigate to="/admin/dashboard" />
            </Routes>
        </HashRouter>
    </AuthProvider>
    );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
