import { useState } from 'react';
import "./App.css";
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';

function App() {


  return (
    <>
    <Login />
    {/* <BrowserRouter>

    <Layout>
      <Routes element={<Layout />}>
        <Route path='/' element={<Dashboard />}/>
        
        
      </Routes>
    </Layout>
    </BrowserRouter> */}
    </>
  )
}

export default App
