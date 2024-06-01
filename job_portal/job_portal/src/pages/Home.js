import React from 'react';
import { Typography, Button, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const Home = () => {
  return (
    <>
      <Title>Welcome to My Landing Page</Title>
      <Paragraph>
        This is a simple, elegant, and user-friendly landing page built with Ant Design and React.js.
      </Paragraph>
      <Row gutter={16} style={{ marginTop: '2rem' }}>
        <Col span={12}>
          <div className="portal-section">
            <Title level={2}>Recruiter Portal</Title>
            <Paragraph>
              Access tools and features specifically designed for recruiters to manage job postings, track candidates, and more.
            </Paragraph>
            <Button type="primary" size="large">
              <a href="/recruiter-portal">Go to Recruiter Portal</a>
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <div className="portal-section">
            <Title level={2}>Candidate Portal</Title>
            <Paragraph>
              Explore job opportunities, manage your applications, and connect with recruiters through our Candidate Portal.
            </Paragraph>
            <Button type="primary" size="large">
              <a href="/candidate-portal">Go to Candidate Portal</a>
            </Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Home;
