import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import { Layout } from './Layout/index.js';
import { Advantages, Contact, Credit } from './pages';

export const Context = createContext();

function App() {
  return (
    <Context.Provider>
      <ToastContainer />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/">
              <Route index element={<Advantages />} />
              <Route path="credit" element={<Credit />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
