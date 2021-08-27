import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Col, Row } from 'antd';

const Form9List = () => {
  return (
    <ProCard size={'small'}>
      <Row>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line', fontFamily: '' }}>
            {' '}
            同期血液透析模式总例次:
            <br />
            76469
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            HD:
            <br />
            42893
          </div>
        </Col>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            HDF:
            <br />
            21123
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            HFD:
            <br />
            7193
          </div>
        </Col>
        <Col span={12}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            HP:
            <br />
            5360
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Form9List;
