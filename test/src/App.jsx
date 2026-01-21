import { useState } from 'react';
import "./App.css";
import Header from './components/header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/pages/Dashboard';

function App() {


  return (
    <>
    <BrowserRouter>
    <Layout>
      <Routes element={<Layout />}>
        <Route path='/' element={<Dashboard />}/>
        
      </Routes>
    </Layout>
    </BrowserRouter>
    </>
  )
}

export default App
