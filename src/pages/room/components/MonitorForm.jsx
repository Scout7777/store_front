import React, { useEffect, useState } from 'react';
import { Row, Modal, Tabs, Form, Divider, Col } from 'antd';
import ProForm from '@ant-design/pro-form';
// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';
import ProCard from '@ant-design/pro-card';
import { getPatient } from '@/services/histsys/patient';
import { getProcess, getProcessLast } from '@/services/histsys/dialysis';

const { TabPane } = Tabs;
// const { adviceTabPane } = Tabs;

const CreateForm = (props) => {
  const [currentPatient, setCurrentPatient] = useState({ ...props.values });
  const [processes, setProcesses] = useState([]);
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

  return (
    <Modal title="查看详情" width={1200} visible={props.visible} onCancel={props.onCancel}>
      <ProCard title="基本信息" bordered headerBordered>
        <Form title="基本信息" submitter={false}>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item label="姓名">
                {currentPatient?.electronicMedicalRecord?.patientName}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="重名附加名">
                {currentPatient?.electronicMedicalRecord?.patientNameSuffix}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="性别">{currentPatient?.electronicMedicalRecord?.gender}</Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item label="住院号">
                {currentPatient?.electronicMedicalRecord?.hospitalizedNo}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="门诊号（登记号）">
                {currentPatient?.electronicMedicalRecord?.outpatientNo}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item label="透析号">
                {currentPatient?.electronicMedicalRecord?.dialysisNo}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="血型">
                {currentPatient?.electronicMedicalRecord?.bloodType}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="家庭住址">
                {currentPatient?.electronicMedicalRecord?.homeAddress}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item label="证件号码">
                {currentPatient?.electronicMedicalRecord?.idNo}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="证件类型">
                {currentPatient?.electronicMedicalRecord?.idType}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="家庭电话">
                {currentPatient?.electronicMedicalRecord?.homeTelephone}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item label="本人电话">
                {currentPatient?.electronicMedicalRecord?.telephone}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="医保号">
                {currentPatient?.electronicMedicalRecord?.insuranceNo}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Form.Item label="出生日期">
                {renderDate(currentPatient?.electronicMedicalRecord?.birthDate)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="创建日期">
                {renderDate(currentPatient?.electronicMedicalRecord?.createdAt)}
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="更新时间">
                {renderDate(currentPatient?.electronicMedicalRecord?.updatedAt)}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
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
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="过敏透析器">
                {processes[tab]?.medicalAdvice.allergyDialyzer || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="干体重（kg）">
                {processes[tab]?.medicalAdvice.netWeight || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="回复">{processes[tab]?.medicalAdvice.reply || '暂无'}</Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="确认状态">
                {processes[tab]?.medicalAdvice.ensureStatus || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="注释">{processes[tab]?.medicalAdvice.comment || '暂无'}</Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="创建时间">
                {renderDate(processes[tab]?.medicalAdvice.createdAt) || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="更新时间">
                {renderDate(processes[tab]?.medicalAdvice.updatedAt) || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />

          <Tabs centered size={'large'}>
            <TabPane tab="HD" disabled={!processes[tab]?.medicalAdvice.hdActive} key="hd">
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hd.anticoagulant || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hd.anticoagulantAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hd.bicarbonate || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hd.bloodFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hd.conductivity || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hd.dialyzer || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hd.dialyzesCa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hd.dialyzesFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hd.dialyzesK || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hd.dialyzesNa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hd.dialyzesTemperature || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hd.initialAxaIU || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hd.preserveAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hd.time || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="创建时间">
                    {renderDate(processes[tab]?.medicalAdvice.hd.createdAt) || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hd.updatedAt) || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
            </TabPane>
            <TabPane tab="HDF" disabled={!processes[tab]?.medicalAdvice.hdfActive} key="hdf">
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hdf.anticoagulant || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hdf.anticoagulantAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hdf.bicarbonate || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hdf.bloodFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hdf.conductivity || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hdf.dialyzer || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesCa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesK || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesNa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hdf.dialyzesTemperature || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hdf.initialAxaIU || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hdf.preserveAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hdf.time || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="置换液量（L）">
                    {processes[tab]?.medicalAdvice.hdf.replaceQuantity || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="置换模式">
                    {processes[tab]?.medicalAdvice.hdf.replaceMethod || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="创建时间">
                    {renderDate(processes[tab]?.medicalAdvice.hdf.createdAt) || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hdf.updatedAt) || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
            </TabPane>
            <TabPane tab="HF" disabled={!processes[tab]?.medicalAdvice.hfActive} key="hf">
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hf.anticoagulant || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hf.anticoagulantAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hf.bicarbonate || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hf.bloodFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hf.conductivity || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hf.dialyzer || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hf.dialyzesCa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hf.dialyzesFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hf.dialyzesK || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hf.dialyzesNa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hf.dialyzesTemperature || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hf.initialAxaIU || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hf.preserveAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hf.time || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="置换液量（L）">
                    {processes[tab]?.medicalAdvice.hf.replaceQuantity || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="置换模式">
                    {processes[tab]?.medicalAdvice.hf.replaceMethod || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="创建时间">
                    {renderDate(processes[tab]?.medicalAdvice.hf.createdAt) || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hf.updatedAt) || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
            </TabPane>
            <TabPane tab="HP" disabled={!processes[tab]?.medicalAdvice.hpActive} key="hp">
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.hp.anticoagulant || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.hp.anticoagulantAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.hp.bicarbonate || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hp.bloodFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.hp.conductivity || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.hp.dialyzer || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.hp.dialyzesCa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.hp.dialyzesFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.hp.dialyzesK || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.hp.dialyzesNa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.hp.dialyzesTemperature || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.hp.initialAxaIU || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.hp.preserveAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.hp.time || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="创建时间">
                    {renderDate(processes[tab]?.medicalAdvice.hp.createdAt) || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.hp.updatedAt) || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
            </TabPane>
            <TabPane tab="IUF" disabled={!processes[tab]?.medicalAdvice.sufActive} key="suf">
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="抗凝剂">
                    {processes[tab]?.medicalAdvice.suf.anticoagulant || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="抗凝剂剂量（AxaIU）">
                    {processes[tab]?.medicalAdvice.suf.anticoagulantAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="碳酸氢根（mmol/l）">
                    {processes[tab]?.medicalAdvice.suf.bicarbonate || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="血流量（ml/min）">
                    {processes[tab]?.medicalAdvice.suf.bloodFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="电导度（mS/cm）">
                    {processes[tab]?.medicalAdvice.suf.conductivity || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析器">
                    {processes[tab]?.medicalAdvice.suf.dialyzer || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钙">
                    {processes[tab]?.medicalAdvice.suf.dialyzesCa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液流量（ml/min）">
                    {processes[tab]?.medicalAdvice.suf.dialyzesFlow || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="透析液钾">
                    {processes[tab]?.medicalAdvice.suf.dialyzesK || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液钠（mmol/l）">
                    {processes[tab]?.medicalAdvice.suf.dialyzesNa || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析液温度（℃）">
                    {processes[tab]?.medicalAdvice.suf.dialyzesTemperature || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="初始量">
                    {processes[tab]?.medicalAdvice.suf.initialAxaIU || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
              <Row gutter={[24, 24]}>
                <Col span={6}>
                  <Form.Item label="维持量">
                    {processes[tab]?.medicalAdvice.suf.preserveAxaIU || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="透析时长（小时）">
                    {processes[tab]?.medicalAdvice.suf.time || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="创建时间">
                    {renderDate(processes[tab]?.medicalAdvice.suf.createdAt) || '暂无'}
                  </Form.Item>
                </Col>
                <Col span={6}>
                  <Form.Item label="更新时间">
                    {renderDate(processes[tab]?.medicalAdvice.suf.updatedAt) || '暂无'}
                  </Form.Item>
                </Col>
              </Row>
              <Divider />
            </TabPane>
          </Tabs>
        </ProForm>
      </ProCard>
      <ProCard
        title="接诊评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="接诊评估" submitter={false}>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="是否可以透析">
                {processes[tab]?.admission.canProcess || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="入室方式">
                {processes[tab]?.admission.walkMethod || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="食欲">{processes[tab]?.admission.eatState || '暂无'}</Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="患者情况">
                {processes[tab]?.admission.patientStatus || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="状态">{processes[tab]?.admission.patientState || '暂无'}</Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="确认状态">
                {processes[tab]?.admission.ensureStatus || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="回复">{processes[tab]?.admission.reply || '暂无'}</Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="评价">{processes[tab]?.admission.comment || '暂无'}</Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="创建日期">
                {renderDate(processes[tab]?.admission.createdAt) || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="更新日期">
                {renderDate(processes[tab]?.admission.updatedAt) || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
        </Form>
      </ProCard>
      <ProCard
        title="透前评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="透前评估" submitter={false}>
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="通路皮肤">
                {processes[tab]?.preAssessment.accessSkin || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="出血因子">
                {processes[tab]?.preAssessment.bleedingFactor || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="呼吸次数（次/分）">
                {processes[tab]?.preAssessment.breathCount || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="导管通路">
                {processes[tab]?.preAssessment.catheterAccess || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="舒张压">
                {processes[tab]?.preAssessment.diastolicBloodPressure || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="跌倒风险">
                {processes[tab]?.preAssessment.fallingRisk || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="心率">
                {processes[tab]?.preAssessment.heartRate || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="透析间期用药">
                {processes[tab]?.preAssessment.interDialysisMedication || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="干体重">
                {processes[tab]?.preAssessment.netWeight || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="预防跌倒措施">
                {processes[tab]?.preAssessment.preventFallMethod || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="透前体重">
                {processes[tab]?.preAssessment.realWeight || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="风险评估">
                {processes[tab]?.preAssessment.riskAssessment || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="收缩压">
                {processes[tab]?.preAssessment.systolicBloodPressure || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="体温（摄氏度）">
                {processes[tab]?.preAssessment.temperature || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="搏动颤音">
                {processes[tab]?.preAssessment.throbbing || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="血管通路">
                {processes[tab]?.preAssessment.vascularAccess || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="确认状态">
                {processes[tab]?.preAssessment.ensureStatus || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="回复">{processes[tab]?.preAssessment.reply || '暂无'}</Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="评价">{processes[tab]?.preAssessment.comment || '暂无'}</Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={6}>
              <Form.Item label="创建时间">
                {renderDate(processes[tab]?.preAssessment.createdAt) || '暂无'}
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="更新时间">
                {renderDate(processes[tab]?.preAssessment.updatedAt) || '暂无'}
              </Form.Item>
            </Col>
          </Row>
          <Divider />
        </Form>
      </ProCard>
      <ProCard
        title="上机"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="上机" submitter={false}>
          <Row gutter={[24, 24]}></Row>
          <Divider />
          <Row gutter={[24, 24]}></Row>
          <Divider />
        </Form>
      </ProCard>
      <ProCard
        title="监控数据"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="监控数据">
          <Row>PAD操作 PC后续添加</Row>
        </ProForm>
      </ProCard>
      <ProCard title="下机" bordered headerBordered>
        <ProForm title="下机"></ProForm>
      </ProCard>
      <ProCard title="透后评估" bordered headerBordered>
        <ProForm title="透后评估"></ProForm>
      </ProCard>
      <ProCard title="临时医嘱" bordered headerBordered></ProCard>
    </Modal>
  );
};
export default CreateForm;
