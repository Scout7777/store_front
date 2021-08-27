import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Col, Row } from 'antd';

const Form6List = () => {
  return (
    <ProCard size={'small'}>
      <Row>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line', fontFamily: '' }}>
            {' '}
            同期总支付人数:
            <br />
            300
          </div>
        </Col>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            基本医保:
            <br />
            75
          </div>
        </Col>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            新农合:
            <br />
            46
          </div>
        </Col>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            自费医疗:
            <br />
            34
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            公费医疗:
            <br />
            87
          </div>
        </Col>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            商业保险:
            <br />6
          </div>
        </Col>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            军队医疗:
            <br />4
          </div>
        </Col>
        <Col span={6}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            其他:
            <br />
            48
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Form6List;
