import React, { useState, useRef } from 'react';
import { Row, Col } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import Area from './components/Area';
import Bed from './components/Bed';

export default () => {
  const [currentArea, setCurrentArea] = useState({});
  const bedActionRef = useRef();

  const handleOnAreaSelect = (area) => {
    if (area) {
      setCurrentArea(area);
      if (bedActionRef.current) {
        bedActionRef.current.reload();
      }
    }
  };

  return (
    <PageContainer>
      <Row>
        <Col span={8}>
          <Area onAreaSelect={handleOnAreaSelect} />
        </Col>
        <Col span={16} style={{ paddingLeft: 10 }}>
          <Bed bedActionRef={bedActionRef} area={currentArea} />
        </Col>
      </Row>
    </PageContainer>
  );
};
