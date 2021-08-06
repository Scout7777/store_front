import React, { useState } from 'react';
import { Row, Col, Button, Tag, Progress } from 'antd';
import {
  PhoneFilled,
  FolderFilled,
  FolderAddFilled,
  CaretRightOutlined,
  PlusCircleFilled,
} from '@ant-design/icons';
import MonitorForm from './MonitorForm';

// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';

const PatientCard = (props) => {
  // const [select, setSelect] = useState(false);
  const [createModalVisible, handleCreateModalVisible] = useState();

  return (
    <div
      style={{ position: 'relative', width: '100%', marginBottom: '18px', borderRadius: '12px' }}
    >
      <div
        style={{
          width: '100%',
          padding: 0,
          boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
          borderRadius: '12px',
          border: '0px solid',
          backgroundColor: 'white',
        }}
        key={props.index}
        onClick={() => {
          handleCreateModalVisible(true);
        }}
      >
        <div style={{ borderBottom: '2px solid rgba(0,0,0,0.06)' }}>
          <Row>
            <Col
              span={3}
              style={{
                fontSize: '16px',
                color: '#3F529E',
                // backgroundColor: '#DADDEA',
                height: '92px',
                padding: '16px',
                fontFamily: 'SourceHanSansSC-Bold',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  borderRadius: '8px',
                  border: '0px solid',
                  backgroundColor: '#DADDEA',
                }}
              >
                {props.index + 1}床
              </div>
            </Col>
            <Col span={15} style={{ height: '92px', padding: '8px' }}>
              <Row>
                <div style={{ fontSize: '20px', display: 'inline' }}>{props.name}</div>
              </Row>
              <Row>
                <div style={{ display: 'inline' }}>HD HDF 15AC</div>
                <div style={{ display: 'inline', marginLeft: 12 }}>登记号：000001</div>
                <div style={{ display: 'inline' }}>
                  <Tag type="primary">住院</Tag>
                </div>
              </Row>
              <Row>
                <Col span={8}>
                  <div style={{ display: 'inline' }}>签到时间</div>
                  <div style={{ display: 'inline', marginLeft: 12 }}>11:30</div>
                </Col>
                <Col span={16}>
                  <Progress percent={30} size="small" />
                </Col>
              </Row>
            </Col>
            <Col span={2}>
              <div style={{ textAlign: 'center', lineHeight: '92px' }}>
                <Button type="primary" shape="circle">
                  <FolderFilled />
                </Button>
              </div>
            </Col>
            <Col span={2}>
              <div style={{ textAlign: 'center', lineHeight: '92px' }}>
                <Button type="primary" shape="circle">
                  <FolderAddFilled />
                </Button>
              </div>
            </Col>
            <Col span={2}>
              <div style={{ textAlign: 'center', lineHeight: '92px' }}>
                <Button type="primary" danger shape="circle">
                  <PhoneFilled />
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <Row style={{ height: '100px', padding: '12px' }}>
          <Col span={4}>
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#B4DCBD',
              }}
            >
              <Row>
                <div style={{ fontSize: '18px' }}>接诊</div>
              </Row>
              <Row>
                <div>11:30</div>
              </Row>
            </div>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>
          <Col span={4}>
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#B4DCBD',
              }}
            >
              <Row>
                <div style={{ fontSize: '18px' }}>评估</div>
              </Row>
              <Row>
                <div>11:30</div>
              </Row>
            </div>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>
          <Col span={4}>
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#B4DCBD',
              }}
            >
              <Row>
                <div style={{ fontSize: '18px' }}>穿刺</div>
              </Row>
              <Row>
                <div>11:30</div>
              </Row>
            </div>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>
          <Col span={4}>
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#B4DCBD',
              }}
            >
              <Row>
                <div style={{ fontSize: '18px' }}>核对</div>
              </Row>
              <Row>
                <div>11:30</div>
              </Row>
            </div>
          </Col>
          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>
          <Col span={4}>
            {/* <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#B4DCBD',
              }}
            >
              <Row>
                <div style={{ fontSize: '18px' }}>上机</div>
              </Row>
              <Row>
                <div>11:30</div>
              </Row>
            </div> */}
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#DADADA',
              }}
            >
              <Row>
                <div style={{ fontSize: '18px' }}>上机</div>
              </Row>
              <Row>
                <div>— —</div>
              </Row>
            </div>
          </Col>
        </Row>

        <Row style={{ height: '100px', padding: '12px' }}>
          <Col span={4}>
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#B4DCBD',
              }}
            >
              <Row>
                <div style={{ fontSize: '20px' }}>监测</div>
              </Row>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            <div
              style={{
                width: '50%',
                height: '100%',
                // padding: 0,
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#DADADA',
              }}
            >
              <div style={{ textAlign: 'center', lineHeight: '76px', fontSize: '18px' }}>
                <PlusCircleFilled />
              </div>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            <div
              style={{
                width: '100%',
                height: '100%',
                padding: '12px',
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#B4DCBD',
              }}
            >
              <Row>
                <div style={{ fontSize: '20px' }}>巡视</div>
              </Row>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            <div
              style={{
                width: '50%',
                height: '100%',
                // padding: 0,
                // boxShadow: '0px 1px 4px 0px rgba(0,0,0,0.06)',
                borderRadius: '12px',
                border: '0px solid',
                backgroundColor: '#DADADA',
              }}
            >
              <div style={{ textAlign: 'center', lineHeight: '76px', fontSize: '18px' }}>
                <PlusCircleFilled />
              </div>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={4}></Col>
        </Row>
      </div>
      <MonitorForm
        onCancel={() => {
          handleCreateModalVisible(false);
        }}
        visible={createModalVisible}
      />
    </div>
  );
};
export default PatientCard;
