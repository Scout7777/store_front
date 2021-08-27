import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Col, Row } from 'antd';

const Form8List = () => {
  return (
    <ProCard size={'small'}>
      <Row style={{ marginTop: 60 }}>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line', fontFamily: '' }}>
            {' '}
            平均数:
            <br />
            5年
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            中位数:
            <br />
            3年
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            标准差:
            <br />
            0.5年
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Form8List;
