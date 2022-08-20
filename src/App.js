import 'antd/dist/antd.css';
import React, { useState } from 'react';
import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import { AddUser, HomePage, Users } from './pages';
import { Button, PageHeader, Space } from 'antd';




function App() {

const navigate = useNavigate();
const [activePage, setActivePage] = useState('')
  return (
    <div className="App">
      <PageHeader>
        <Space size={"large"}>
        <Button type={activePage=="addUser" ? "primary" : "secondary"} 
        onClick={()=>{
          navigate("/addUser");
          setActivePage("addUser")
        }}>add usere</Button>
        <Button type={activePage=="users" ? "primary" : "secondary"} 
        onClick={()=>{
          navigate("/users");
          setActivePage("users")
        }}
        >users</Button>
        </Space>
      </PageHeader>

      <Routes>
      <Route path="/addUser" element = {<AddUser/>} />
      <Route path="/users" element = {<Users/>} />
      <Route path="/" element = {<HomePage/>} />
      </Routes>

    </div>
  );
}

export default App;

