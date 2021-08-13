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
import AdmissionForm from './AdmissionForm';
import PreAssessment from './PreAssessment';
import Puncture from './Puncture';
import Check from './Check';
import On from './On';
import Down from './Down';
import Monitor from './NMonitor';
import Patrol from './Patrol';
import { createAdmission, createProcess, updatePre } from '@/services/histsys/dialysis';

// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';

const PatientCard = (props) => {
  // const [select, setSelect] = useState(false);
  const [createModalVisible, handleCreateModalVisible] = useState();
  const [ModalVisible, handleModalVisible] = useState();
  const [PreVisible, handlePreVisible] = useState();
  const [CheckVisible, handleCheckVisible] = useState();
  const [PunctureVisible, handlePunctureVisible] = useState();
  const [OnVisible, handleOnVisible] = useState();
  const [DownVisible, handleDownVisible] = useState();
  const [MonitorVisible, handleMonitorVisible] = useState();
  const [PatrolVisible, handlePatrolVisible] = useState();
  // const [value, setValue] = useState({...props.values});
  const [process, setProcess] = useState();
  const [admission, setAdmission] = useState(false);
  const [admissionO, setAdmissionO] = useState(false);
  const [preAssessment, setPreAssessment] = useState();
  const [pre, setPre] = useState(false);
  const [puncture, setPuncture] = useState(false);
  const [check, setCheck] = useState(false);
  const [monitor, setMonitor] = useState(0);
  const [patrol, setPatrol] = useState(0);
  const [on, setOn] = useState(false);
  const [down, setDown] = useState(false);

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
                {/* <div style={{ display: 'inline' }}>HD HDF 15AC</div> */}
                <div style={{ display: 'inline' }}>登记号：000001</div>
                <div style={{ display: 'inline' }}>
                  <Tag type="primary">住院</Tag>
                </div>
              </Row>
              <Row>
                <Col span={8}>
                  <div style={{ display: 'inline' }}>11:30</div>
                </Col>
                <Col span={16}>
                  <Progress percent={0} size="small" />
                </Col>
              </Row>
            </Col>
            <Col span={2}>
              <div style={{ textAlign: 'center', lineHeight: '92px' }}>
                <Button
                  type="primary"
                  shape="circle"
                  onClick={() => {
                    handleCreateModalVisible(true);
                  }}
                >
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
            {admission ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
            ) : (
              <div
                onClick={() => handleModalVisible(true)}
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
                <AdmissionForm
                  visible={ModalVisible}
                  onSubmit={async (value) => {
                    const resp = await createAdmission(20, value);
                    console.log(resp);
                    setAdmissionO(resp.data);
                    console.log(admissionO);
                    const resp2 = await createProcess(resp.data.patientId, resp.data.id);
                    console.log(resp2);
                    setProcess(resp2.data);
                    console.log(process);
                    setAdmission(true);
                  }}
                  onCancel={() => {
                    handleModalVisible(false);
                  }}
                />
                <Row>
                  <div style={{ fontSize: '18px' }}>接诊</div>
                </Row>
                <Row>
                  <div>— —</div>
                </Row>
              </div>
            )}
          </Col>
          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>
          <Col span={4}>
            {pre ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
            ) : (
              <div
                onClick={() => handlePreVisible(true)}
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
                <PreAssessment
                  visible={PreVisible}
                  onSubmit={async (value) => {
                    console.log(value);
                    setPreAssessment(value);
                    const resp = await updatePre(process.id, value);
                    console.log(resp);
                    console.log(preAssessment);
                    handlePreVisible(false);
                    setPre(true);
                  }}
                  // onSubmit={(value) => {
                  //   setPreAssessment(value);
                  //   console.log(preAssessment);
                  //   handlePreVisible(false);
                  //   setPre(true);
                  // }}
                  onCancel={() => {
                    handlePreVisible(false);
                  }}
                />
                <Row>
                  <div style={{ fontSize: '18px' }}>评估</div>
                </Row>
                <Row>
                  <div>— —</div>
                </Row>
              </div>
            )}
          </Col>
          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>

          <Col span={4}>
            {puncture ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
                  <div style={{ fontSize: '18px' }}>穿/药</div>
                </Row>
                <Row>
                  <div>11:30</div>
                </Row>
              </div>
            ) : (
              <div
                onClick={() => handlePunctureVisible(true)}
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
                <Puncture
                  visible={PunctureVisible}
                  // onSubmit={async (value) => {
                  //   console.log(value)
                  //   console.log(process)
                  //   const resp = await updatePre(process.id, value)
                  //   console.log(resp)
                  // }}
                  processid={process?.id}
                  onSubmit={() => {
                    handlePunctureVisible(false);
                    setPuncture(true);
                  }}
                  onCancel={() => {
                    handlePunctureVisible(false);
                  }}
                />
                <Row>
                  <div style={{ fontSize: '18px' }}>穿/药</div>
                </Row>
                <Row>
                  <div>— —</div>
                </Row>
              </div>
            )}
          </Col>

          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>

          <Col span={4}>
            {on ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
              </div>
            ) : (
              <div
                onClick={() => handleOnVisible(true)}
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
                <On
                  visible={OnVisible}
                  onSubmit={async () => {
                    handleOnVisible(false);
                    setOn(true);
                  }}
                  onCancel={() => {
                    handleOnVisible(false);
                  }}
                />
                <Row>
                  <div style={{ fontSize: '18px' }}>上机</div>
                </Row>
                <Row>
                  <div>— —</div>
                </Row>
              </div>
            )}
          </Col>

          <Col span={1}>
            <div style={{ textAlign: 'center', lineHeight: '76px' }}>
              <CaretRightOutlined />
            </div>
          </Col>

          <Col span={4}>
            {check ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
            ) : (
              <div
                onClick={() => handleCheckVisible(true)}
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
                <Check
                  visible={CheckVisible}
                  onSubmit={() => {
                    handleCheckVisible(false);
                    setCheck(true);
                  }}
                  onCancel={() => {
                    handleCheckVisible(false);
                  }}
                />
                <Row>
                  <div style={{ fontSize: '18px' }}>核对</div>
                </Row>
                <Row>
                  <div>— —</div>
                </Row>
              </div>
            )}
          </Col>
        </Row>

        <Row style={{ height: '100px', padding: '12px' }}>
          <Col span={4}>
            {monitor > 0 ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
                  <div style={{ fontSize: '18px' }}>监测已进行</div>
                </Row>
                <Row>
                  <div>{monitor}</div>
                </Row>
              </div>
            ) : (
              <div
                onClick={() => handleOnVisible(true)}
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
                  <div style={{ fontSize: '18px' }}>监测</div>
                </Row>
                <Row>
                  <div>未进行</div>
                </Row>
              </div>
            )}
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            <div
              onClick={() => handleMonitorVisible(true)}
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
              <Monitor
                visible={MonitorVisible}
                onSubmit={async () => {
                  handleMonitorVisible(false);
                  setMonitor(monitor + 1);
                }}
                onCancel={() => {
                  handleMonitorVisible(false);
                }}
              />
              <div style={{ textAlign: 'center', lineHeight: '76px', fontSize: '18px' }}>
                <PlusCircleFilled />
              </div>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            {patrol > 0 ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
                  <div style={{ fontSize: '18px' }}>巡视已进行</div>
                </Row>
                <Row>
                  <div>{patrol}</div>
                </Row>
              </div>
            ) : (
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
                  <div style={{ fontSize: '18px' }}>巡视</div>
                </Row>
                <Row>
                  <div>未进行</div>
                </Row>
              </div>
            )}
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            <div
              onClick={() => handlePatrolVisible(true)}
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
              <Patrol
                visible={PatrolVisible}
                onSubmit={async () => {
                  handlePatrolVisible(false);
                  setPatrol(patrol + 1);
                }}
                onCancel={() => {
                  handlePatrolVisible(false);
                }}
              />
              <div style={{ textAlign: 'center', lineHeight: '76px', fontSize: '18px' }}>
                <PlusCircleFilled />
              </div>
            </div>
          </Col>
          <Col span={1}></Col>
          <Col span={4}>
            {down ? (
              <div
                onClick={() => {
                  handleCreateModalVisible(true);
                }}
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
                  <div style={{ fontSize: '18px' }}>下机</div>
                </Row>
                <Row>
                  <div>11:30</div>
                </Row>
              </div>
            ) : (
              <div
                onClick={() => handleDownVisible(true)}
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
                <Down
                  visible={DownVisible}
                  onSubmit={async () => {
                    handleDownVisible(false);
                    setDown(true);
                  }}
                  onCancel={() => {
                    handleDownVisible(false);
                  }}
                />
                <Row>
                  <div style={{ fontSize: '18px' }}>下机</div>
                </Row>
                <Row>
                  <div>— —</div>
                </Row>
              </div>
            )}
          </Col>
        </Row>
      </div>
      <MonitorForm
        onCancel={() => {
          handleCreateModalVisible(false);
        }}
        onCancel={() => {
          handleCreateModalVisible(false);
        }}
        visible={createModalVisible}
      />
    </div>
  );
};
export default PatientCard;
