import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Row, Col } from 'antd';

const Form1List = () => {
  return (
    <ProCard size={'small'}>
      <Row>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line', fontFamily: '' }}>
            {' '}
            构成总人数:
            <br />
            300
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            20岁以下:
            <br />5
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            20-40:
            <br />
            12
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            40-60:
            <br />
            24
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            60-80:
            <br />
            50
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            80岁以上:
            <br />9
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Form1List;
