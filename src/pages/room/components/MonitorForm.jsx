import React, { useEffect, useState } from 'react';
import { Row, Modal, Tabs, Form, Divider, Col, Button, notification } from 'antd';
import ProForm from '@ant-design/pro-form';
// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';
import ProCard from '@ant-design/pro-card';
import { getPatient } from '@/services/histsys/patient';
import {
  createAdmission,
  createProcess,
  getProcess,
  getProcessLast,
  updateMedical,
  updatePre,
} from '@/services/histsys/dialysis';

import AdmissionForm from '@/pages/monitor_pad/components/AdmissionForm';
import PreAssessment from '@/pages/monitor_pad/components/PreAssessment';
// import BasicCreateForm from "@/pages/patient/components/BasicCreateForm";
// import Puncture from '@/pages/monitor_pad/components/Puncture';
// import Check from '@/pages/monitor_pad/components/Check';
// import On from '@/pages/monitor_pad/components/On';
// import Down from '@/pages/monitor_pad/components/Down';
// import Monitor from '@/pages/monitor_pad/components/NMonitor';
// import Patrol from '@/pages/monitor_pad/components/Patrol';
import MedicalForm from '@/pages/monitor_pad/components/MedicalForm';
// import AMedical from '@/pages/monitor_pad/components/AMedical';

const { TabPane } = Tabs;
// const { adviceTabPane } = Tabs;

const CreateForm = (props) => {
  const [currentPatient, setCurrentPatient] = useState({ ...props.values });
  const [ModalVisible, handleModalVisible] = useState();
  const [processes, setProcesses] = useState([]);
  const [PreVisible, handlePreVisible] = useState();
  const [MedicalFormModalVisible, handleMedicalFormModalVisible] = useState();
  const [tab, setTab] = useState(0);
  const { id } = props.values;
  const renderDate = (utc) => {
    return new Date(utc).toLocaleDateString();
  };

  useEffect(() => {
    console.log(id);
    async function nowPatient() {
      if (id) {
        await getPatient(id).then((resp) => {
          console.log(resp);
          setCurrentPatient(resp.data);
        });
        await getProcess(id).then((resp) => {
          setProcesses(resp.data.content);
          console.log(resp);
        });
        await getProcessLast(id).then((resp) => {
          console.log(resp);
        });
      }
    }

    nowPatient();
  }, [id]);

  console.log(processes);
  console.log(currentPatient);
  console.log(props);

  return (
    <Modal title="查看详情" width={1200} visible={props.visible} onCancel={props.onCancel}>
      <ProCard title="基本信息" bordered headerBordered>
        <Form title="基本信息" submitter={false}>
          <Row>
            <Col span={12}>
              <Form.Item label="姓名">
                {currentPatient?.electronicMedicalRecord?.patientName}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="性别">{currentPatient?.electronicMedicalRecord?.gender}</Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="住院号">
                {currentPatient?.electronicMedicalRecord?.hospitalizedNo}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="门诊号（登记号）">
                {currentPatient?.electronicMedicalRecord?.outpatientNo}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label="透析号">
                {currentPatient?.electronicMedicalRecord?.dialysisNo}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="血型">
                {currentPatient?.electronicMedicalRecord?.bloodType}
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label={currentPatient?.electronicMedicalRecord?.idType}>
                {currentPatient?.electronicMedicalRecord?.idNo}
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="本人电话">
                {currentPatient?.electronicMedicalRecord?.telephone}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </ProCard>

      <Tabs
        defaultActiveKey="0"
        onChange={(key) => {
          console.log(key);
          setTab(key);
        }}
      >
        {processes.map((item, i) => (
          <TabPane tab={`记录单${renderDate(item.updatedAt)}`} key={i}>
            {/* Content of tab {i} */}
          </TabPane>
        ))}
      </Tabs>

      <ProCard title="透析医嘱" bordered headerBordered>
        <ProForm title="透析医嘱" submitter={false}>
          <Row>
            <Col span={12}>
              <Form.Item label="干体重（kg）">
                {processes[tab]?.medicalAdvice.netWeight || '/'}
              </Form.Item>
            </Col>
          </Row>

          <Tabs centered size={'large'}>
            <TabPane tab="HD" disabled={!processes[tab]?.medicalAdvice.hdActive} key="hd">
              <Row>
                <Col span={8}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hd.anticoagulant || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hd.anticoagulantAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hd.bicarbonate || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hd.bloodFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hd.conductivity || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hd.dialyzer || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hd.dialyzesCa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hd.dialyzesFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hd.dialyzesK || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hd.dialyzesNa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hd.dialyzesTemperature || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hd.initialAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hd.preserveAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hd.time || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hd.updatedAt) || '/'}
                  </Form.Item>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="HDF" disabled={!processes[tab]?.medicalAdvice.hdfActive} key="hdf">
              <Row>
                <Col span={8}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hdf.anticoagulant || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hdf.anticoagulantAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hdf.bicarbonate || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hdf.bloodFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hdf.conductivity || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hdf.dialyzer || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesCa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesK || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesNa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesTemperature || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hdf.initialAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hdf.preserveAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hdf.time || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="置换液量（L）">
                    {processes[tab]?.medicalAdvice.hdf.replaceQuantity || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="置换模式">
                    {processes[tab]?.medicalAdvice.hdf.replaceMethod || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hdf.updatedAt) || '/'}
                  </Form.Item>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="HF" disabled={!processes[tab]?.medicalAdvice.hfActive} key="hf">
              <Row>
                <Col span={8}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hf.anticoagulant || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hf.anticoagulantAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hf.bicarbonate || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hf.bloodFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hf.conductivity || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hf.dialyzer || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hf.dialyzesCa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hf.dialyzesFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hf.dialyzesK || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hf.dialyzesNa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hf.dialyzesTemperature || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hf.initialAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hf.preserveAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hf.time || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="置换液量（L）">
                    {processes[tab]?.medicalAdvice.hf.replaceQuantity || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="置换模式">
                    {processes[tab]?.medicalAdvice.hf.replaceMethod || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hf.updatedAt) || '/'}
                  </Form.Item>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="HP" disabled={!processes[tab]?.medicalAdvice.hpActive} key="hp">
              <Row>
                <Col span={8}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hp.anticoagulant || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hp.anticoagulantAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hp.bicarbonate || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hp.bloodFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hp.conductivity || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hp.dialyzer || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hp.dialyzesCa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hp.dialyzesFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hp.dialyzesK || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hp.dialyzesNa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hp.dialyzesTemperature || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hp.initialAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hp.preserveAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hp.time || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hp.updatedAt) || '/'}
                  </Form.Item>
                </Col>
              </Row>
            </TabPane>
            <TabPane tab="IUF" disabled={!processes[tab]?.medicalAdvice.sufActive} key="suf">
              <Row>
                <Col span={8}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.suf.anticoagulant || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.suf.anticoagulantAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.suf.bicarbonate || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.suf.bloodFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.suf.conductivity || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.suf.dialyzer || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.suf.dialyzesCa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.suf.dialyzesFlow || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.suf.dialyzesK || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.suf.dialyzesNa || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.suf.dialyzesTemperature || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.suf.initialAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.suf.preserveAxaIU || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.suf.time || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="创建时间">
                    {renderDate(processes[tab]?.medicalAdvice.suf.createdAt) || '/'}
                  </Form.Item>
                </Col>
                <Col span={8}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.suf.updatedAt) || '/'}
                  </Form.Item>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
        </ProForm>
        <Button size={'large'} type="primary" onClick={() => handleMedicalFormModalVisible(true)}>
          修改
          <MedicalForm
            visible={MedicalFormModalVisible}
            lastValue={process?.medicalAdvice}
            onSubmit={async (value) => {
              const resp = await updateMedical(process?.id || null, value);
              notification.open({
                description: resp.status + resp.message,
                message: '调试',
              });
              handleMedicalFormModalVisible(false);
            }}
            onCancel={() => {
              handleMedicalFormModalVisible(false);
            }}
          />
        </Button>
      </ProCard>
      <ProCard
        title="接诊评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="接诊评估" submitter={false}>
          <Row>
            <Col span={8}>
              <Form.Item label="是否可以透析">
                {processes[tab]?.admission.canProcess || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="入室方式">{processes[tab]?.admission.walkMethod || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="食欲">{processes[tab]?.admission.eatState || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="患者情况">
                {processes[tab]?.admission.patientStatus || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="状态">{processes[tab]?.admission.patientState || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="确认状态">
                {processes[tab]?.admission.ensureStatus || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="回复">{processes[tab]?.admission.reply || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="评价">{processes[tab]?.admission.comment || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="更新日期">
                {renderDate(processes[tab]?.admission.updatedAt) || '/'}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button size={'large'} type="primary" onClick={() => handleModalVisible(true)}>
          修改
          <AdmissionForm
            visible={ModalVisible}
            onSubmit={async (value) => {
              const resp = await createAdmission(id, value);
              setAdmissionO(resp.data);
              const resp2 = await createProcess(resp.data.patientId, resp.data.id);
              setProcess(resp2.data);
              setAdmission(true);
            }}
            onCancel={() => {
              handleModalVisible(false);
            }}
          />
        </Button>
      </ProCard>
      <ProCard
        title="透前评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="透前评估" submitter={false}>
          <Row>
            <Col span={8}>
              <Form.Item label="通路皮肤">
                {processes[tab]?.preAssessment.accessSkin || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="出血因子">
                {processes[tab]?.preAssessment.bleedingFactor || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="呼吸次数（次/分）">
                {processes[tab]?.preAssessment.breathCount || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="导管通路">
                {processes[tab]?.preAssessment.catheterAccess || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="舒张压">
                {processes[tab]?.preAssessment.diastolicBloodPressure || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="跌倒风险">
                {processes[tab]?.preAssessment.fallingRisk || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="心率">{processes[tab]?.preAssessment.heartRate || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="透析间期用药">
                {processes[tab]?.preAssessment.interDialysisMedication || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="干体重">{processes[tab]?.preAssessment.netWeight || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="预防跌倒措施">
                {processes[tab]?.preAssessment.preventFallMethod || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="透前体重">
                {processes[tab]?.preAssessment.realWeight || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="风险评估">
                {processes[tab]?.preAssessment.riskAssessment || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="收缩压">
                {processes[tab]?.preAssessment.systolicBloodPressure || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="体温（摄氏度）">
                {processes[tab]?.preAssessment.temperature || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="搏动颤音">
                {processes[tab]?.preAssessment.throbbing || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="血管通路">
                {processes[tab]?.preAssessment.vascularAccess || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="确认状态">
                {processes[tab]?.preAssessment.ensureStatus || '/'}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="回复">{processes[tab]?.preAssessment.reply || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="评价">{processes[tab]?.preAssessment.comment || '/'}</Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="更新时间">
                {renderDate(processes[tab]?.preAssessment.updatedAt) || '/'}
              </Form.Item>
            </Col>
          </Row>
        </Form>
        <Button size={'large'} type="primary" onClick={() => handlePreVisible(true)}>
          修改
          <PreAssessment
            visible={PreVisible}
            onSubmit={async (value) => {
              setPreAssessment(value);
              await updatePre(process.id, value);
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
        </Button>
      </ProCard>
      <ProCard
        title="上机"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="上机" submitter={false}>
          <Row></Row>
          <Divider />
          <Row></Row>
          <Divider />
        </Form>
      </ProCard>
      <ProCard
        title="监控数据"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="监控数据" submitter={false}>
          <Row>PAD操作 PC后续添加</Row>
        </ProForm>
      </ProCard>
      <ProCard title="下机" bordered headerBordered>
        <ProForm title="下机" submitter={false}></ProForm>
      </ProCard>
      <ProCard title="透后评估" bordered headerBordered>
        <ProForm title="透后评估" submitter={false}></ProForm>
      </ProCard>
      <ProCard title="临时医嘱" bordered headerBordered></ProCard>
    </Modal>
  );
};
export default CreateForm;
