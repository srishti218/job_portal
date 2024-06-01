import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Layout, Menu, Button, Typography, Row, Col } from 'antd';
import Home from './pages/Home';
import RecruiterPortal from './pages/RecruiterPortal';
import CandidatePortal from './pages/CandidatePortal';
import './App.css';

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo">My Landing Page</div>
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/recruiter-portal">Recruiter Portal</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/candidate-portal">Candidate Portal</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Routes>
              <Route exact path="/" component={Home} />
              <Route path="/recruiter-portal" component={RecruiterPortal} />
              <Route path="/candidate-portal" component={CandidatePortal} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>My Landing Page ©2023 Created by Me</Footer>
      </Layout>
    </Router>
  );
};

export default App;
