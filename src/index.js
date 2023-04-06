import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Layout from './Layout/Layout';
import { ChangeContext } from './Context/LessContext';
import { reducer, initialState } from './Context/InitialState';

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:(<App/>),
//   },
//   {
//     path:'/login',
//     element:(<Login/>)
//   },
//   {
//     path:'/signup',
//     element:(<Signup/>)
//   }
// ])
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
    <BrowserRouter >
      <Routes >
          <Route element={<Layout />}>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/signup"
              element={
                <Signup/>
              }
            />
          </Route>
      </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
