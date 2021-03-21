import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CategoryBarComp } from '../../components/categoryBar/CategoryBar';
import { VideoComp } from '../../components/video/Video';

export const Homescreen = () => {
  return (
    <Container>
      <CategoryBarComp />
      <Row>
        {[...new Array(20)].map(() => (
          <Col lg={3} md={4}>
            <VideoComp />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
