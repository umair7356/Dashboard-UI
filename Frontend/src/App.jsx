import React from 'react'
import Dashboard from './Dash.jsx';
import Table from './comp/Table.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from './comp/Sidebar.jsx';
import Chat from './comp/Chat.jsx';
import Employe from './comp/Employe.jsx';
import Ordertrack from './comp/Ordertrack.jsx';
function App() {
  return (
    <>
      <Router future={{ v7_startTransition: true }}>
        <div className="flex">
          <Sidebar />
          <main className="flex-1  relative">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Table />} />
              <Route path="/messages" element={<Chat />} />
              <Route path="/employs" element={<Employe />} />
              <Route path="/ordertrack" element={<Ordertrack />} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App
