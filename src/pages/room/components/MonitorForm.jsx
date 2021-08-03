import React from 'react';
import { Row, Modal, Tabs, Form } from 'antd';
import ProForm, { ProFormText, ProFormSelect, ProFormDigit } from '@ant-design/pro-form';
// import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';
import ProCard from '@ant-design/pro-card';

const { TabPane } = Tabs;

const CreateForm = (props) => {
  return (
    <Modal title="查看详情" width={1200} visible={props.visible} onCancel={props.onCancel}>
      <ProCard bordered headerBordered>
        <Form title="基本信息">
          <Form.Item label="姓名">测试患者</Form.Item>
          <Form.Item label="性别">男</Form.Item>
        </Form>
      </ProCard>
      <Tabs defaultActiveKey="1">
        {[...Array.from({ length: 30 }, (v, i) => i)].map((i) => (
          <TabPane tab={`记录单${i}`} key={i} disabled={i === 28}>
            {/* Content of tab {i} */}
          </TabPane>
        ))}
      </Tabs>
      <ProCard
        title="透析医嘱"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="透析医嘱">
          <Row>
            <ProFormSelect
              valueEnum={{
                none: '无',
                HD: 'HD',
                HF: 'HF',
                HDF: 'HDF',
              }}
              name="Type"
              label="类型"
              fieldProps={{
                onChange: (value) => {
                  console.log(value);
                },
              }}
              initialValue={'HDF'}
            />
            <ProFormDigit
              name="DialysisDuration"
              label="透析时长（小时）"
              initialValue={'4'}
            ></ProFormDigit>
            <ProFormDigit
              name="BloodVol"
              label="血流量（ml/min）"
              initialValue={'240'}
            ></ProFormDigit>
            <ProFormDigit
              name="Conductivity"
              label="电导度（mS/cm）"
              initialValue={'14'}
            ></ProFormDigit>
            <ProFormDigit
              name="DlTemperature"
              label="透析液温度（℃）"
              initialValue={'36.5'}
            ></ProFormDigit>
            <ProFormDigit
              name="DlFlow"
              initialValue={'500'}
              label="透析液流量（ml/min）"
            ></ProFormDigit>
            <ProFormDigit
              name="BicarbonateRadical"
              label="碳酸氢根（mmol/l）"
              initialValue={'31.1'}
            ></ProFormDigit>
            <ProFormDigit
              name="DlSodium"
              label="透析液钠（mmol/l）"
              initialValue={'137.8'}
            ></ProFormDigit>
            <ProFormDigit name="DlPotassium" initialValue={'2'} label="透析液钾"></ProFormDigit>
            <ProFormDigit name="DlCalcium" label="透析液钙" initialValue={'1.5'}></ProFormDigit>
            <ProFormText
              name="Anticoagulant"
              label="抗凝剂"
              initialValue={'低分子肝素'}
            ></ProFormText>
            <ProFormDigit
              name="AnticoagulantQuantity"
              initialValue={'2500'}
              label="抗凝剂剂量（AxaIU）"
            ></ProFormDigit>
            <ProFormDigit name="InitialAmount" label="初始量"></ProFormDigit>
            <ProFormDigit name="MaintenanceQuantity" label="维持量"></ProFormDigit>
            <ProFormDigit name="RlAmount" label="置换液量（L）" initialValue={'24'}></ProFormDigit>
            <ProFormText
              name="ReplacementMode"
              label="置换模式"
              initialValue={'后稀释'}
            ></ProFormText>
          </Row>
        </ProForm>
      </ProCard>
      <ProCard
        title="接诊评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="接诊评估">
          <Row>PAD操作 PC后续添加</Row>
        </ProForm>
      </ProCard>
      <ProCard
        title="透前评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="透前评估">
          <Row>PAD操作 PC后续添加</Row>
        </ProForm>
      </ProCard>
      <ProCard
        title="上机"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="上机">
          <Row>PAD操作 PC后续添加</Row>
        </ProForm>
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
      <ProCard
        title="下机"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="下机">
          <Row>PAD操作 PC后续添加</Row>
        </ProForm>
      </ProCard>
      <ProCard
        title="透后评估"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="透后评估">
          <Row>PAD操作 PC后续添加</Row>
        </ProForm>
      </ProCard>
      <ProCard
        title="临时医嘱"
        // extra="2019年9月28日"
        bordered
        headerBordered
      >
        <ProForm title="临时医嘱">
          <Row>
            <ProFormSelect
              valueEnum={{
                none: '无',
                HD: 'HD',
                HF: 'HF',
                HDF: 'HDF',
              }}
              name="Type"
              label="类型"
              fieldProps={{
                onChange: (value) => {
                  console.log(value);
                },
              }}
            />
            <ProFormDigit name="DialysisDuration" label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name="BloodVol" label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="Conductivity" label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit name="DlTemperature" label="透析液温度（℃）"></ProFormDigit>
            <ProFormDigit name="DlFlow" label="透析液流量（ml/min）"></ProFormDigit>
            <ProFormDigit name="BicarbonateRadical" label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlSodium" label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name="DlPotassium" label="透析液钾"></ProFormDigit>
            <ProFormDigit name="DlCalcium" label="透析液钙"></ProFormDigit>
            <ProFormText name="Anticoagulant" label="抗凝剂"></ProFormText>
            <ProFormDigit name="AnticoagulantQuantity" label="抗凝剂剂量（AxaIU）"></ProFormDigit>
            <ProFormDigit name="InitialAmount" label="初始量"></ProFormDigit>
            <ProFormDigit name="MaintenanceQuantity" label="维持量"></ProFormDigit>
            <ProFormDigit name="RlAmount" label="置换液量（L）"></ProFormDigit>
            <ProFormText name="ReplacementMode" label="置换模式"></ProFormText>
          </Row>
        </ProForm>
      </ProCard>
    </Modal>
  );
};
export default CreateForm;
