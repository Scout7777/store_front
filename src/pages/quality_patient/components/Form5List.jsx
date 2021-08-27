import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Col, Row } from 'antd';

const Form5List = () => {
  return (
    <ProCard size={'small'}>
      <Row>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line', fontFamily: '' }}>
            {' '}
            同期传染病总数:
            <br />
            100
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            乙肝HBV:
            <br />
            21
          </div>
        </Col>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            丙肝HCV:
            <br />
            37
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            梅毒检测状态代码RPR:
            <br />
            12
          </div>
        </Col>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            艾滋病HIV:
            <br />
            30
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Form5List;
