import React, { useEffect, useState } from 'react';
import { Row, Modal, Tabs, Form } from 'antd';
import ProForm from '@ant-design/pro-form';
// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';
import ProCard from '@ant-design/pro-card';
import { getPatient } from '@/services/histsys/patient';
import { getProcess, getProcessLast } from '@/services/histsys/dialysis';

const { TabPane } = Tabs;

const CreateForm = (props) => {
  const [currentPatient, setCurrentPatient] = useState({ ...props.values });
  const [processes, setProcesses] = useState([]);
  const [tab, setTab] = useState();
  const { id } = props.values;

  const renderDate = (utc) => {
    return new Date(utc).toLocaleString();
  };

  useEffect(() => {
    console.log(id);
    async function nowPatient() {
      if (id) {
        await getPatient(id).then((resp) => {
          console.log(resp);
          setCurrentPatient(resp.data, currentPatient);
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
  return (
    <Modal title="查看详情" width={1200} visible={props.visible} onCancel={props.onCancel}>
      <ProCard bordered headerBordered>
        <Form title="基本信息">
          <Form.Item label="姓名">{currentPatient?.electronicMedicalRecord?.patientName}</Form.Item>
          <Form.Item label="登记号">
            {currentPatient?.electronicMedicalRecord?.outpatientNo}
          </Form.Item>
          <Form.Item label="性别">{currentPatient?.electronicMedicalRecord?.gender}</Form.Item>
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
          <Row></Row>
        </ProForm>
      </ProCard>
      <ProCard
        title="接诊评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="接诊评估" submitter={false}>
          <Form.Item label="入室方式">{processes[tab]?.admission.walkMethod || '暂无'}</Form.Item>
          <Form.Item label="状态">{processes[tab]?.admission.patientState || '暂无'}</Form.Item>
          <Form.Item label="食欲">{processes[tab]?.admission.eatState || '暂无'}</Form.Item>
        </Form>
      </ProCard>
      <ProCard
        title="透前评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="透前评估" submitter={false}>
          <Form.Item label="透前体重">
            {processes[tab]?.preAssessment.realWeight || '暂无'}
          </Form.Item>
          <Form.Item label="干体重">{processes[tab]?.preAssessment.netWeight || '暂无'}</Form.Item>
        </Form>
      </ProCard>
      <ProCard
        title="上机"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <Form title="上机" submitter={false}>
          <Form.Item label="穿刺/换药操作人">{processes[tab]?.puncture.nurse || '暂无'}</Form.Item>
          <Form.Item label="上机操作人">{processes[tab]?.boardOn.nurse || '暂无'}</Form.Item>
          <Form.Item label="抗凝剂名称">{processes[tab]?.heparin.heparinName || '暂无'}</Form.Item>
          <Form.Item label="抗凝剂剂量">
            {processes[tab]?.heparin.heparinAmount || '暂无'}
          </Form.Item>
          <Form.Item label="核对操作人">{processes[tab]?.check.checkNurse || '暂无'}</Form.Item>
          <Form.Item label="责任医生">{processes[tab]?.check.responseDoctor || '暂无'}</Form.Item>
          <Form.Item label="责任护士">{processes[tab]?.check.responseNurse || '暂无'}</Form.Item>
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
