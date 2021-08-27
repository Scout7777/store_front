import React from 'react';
import ProCard from '@ant-design/pro-card';
import { Col, Row } from 'antd';

const Form4List = () => {
  return (
    <ProCard size={'small'}>
      <Row>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line', fontFamily: '' }}>
            {' '}
            同期原发病诊断总数:
            <br />
            300
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            原发性肾小球疾病:
            <br />
            102
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            继发性肾小球疾病:
            <br />
            55
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            遗传性及先天性疾病:
            <br />
            12
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            肾小管间质疾病:
            <br />7
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            药物性肾损害:
            <br />
            46
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            泌尿系肿瘤:
            <br />
            23
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: 60 }}>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            泌尿系感染和结实:
            <br />
            12
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            肾脏切除术后:
            <br />8
          </div>
        </Col>
        <Col span={8}>
          <div style={{ fontSize: '22px', whiteSpace: 'pre-line' }}>
            {' '}
            原发病不明确:
            <br />
            35
          </div>
        </Col>
      </Row>
    </ProCard>
  );
};

export default Form4List;
