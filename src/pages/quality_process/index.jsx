import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';

import Form1 from '@/pages/quality_patient/components/Form1';
import Form1List from '@/pages/quality_patient/components/Form1List';
import Form3 from '@/pages/quality_patient/components/Form3';
import Form4 from '@/pages/quality_patient/components/Form4';
import Form4List from '@/pages/quality_patient/components/Form4List';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard title={'患者统计数据'}>
      <Tabs key="1">
        <TabPane tab="人口统计数据" key="1">
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px', width: '50%' }}>
              <Form1 />
              <div style={{ fontSize: '22px' }}>血透室（中心）实际/核准开放床位数比例</div>
            </ProCard>
            <ProCard>
              <Form1List />
            </ProCard>
          </ProCard>
        </TabPane>
        <TabPane tab="病症统计数据" key="2">
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px', width: '50%' }}>
              <div style={{ fontSize: '22px' }}>血透室（中心）床位使用率</div>
            </ProCard>
            <ProCard>
              <Form1List />
            </ProCard>
          </ProCard>
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form3 />
            <div style={{ fontSize: '22px' }}>血液透析患者年龄及其构成</div>
          </ProCard>
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px', width: '50%' }}>
              <Form4 />
              <div style={{ fontSize: '22px' }}>血液透析患者年龄及其构成</div>
            </ProCard>
            <ProCard>
              <Form4List />
            </ProCard>
          </ProCard>
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}></ProCard>
        </TabPane>
        <TabPane tab="支付统计数据" key="3">
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form1 />
            <div style={{ fontSize: '22px' }}>血液透析患者年龄及其构成</div>
          </ProCard>
        </TabPane>
        <TabPane tab="透析龄统计数据" key="4">
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form1 />
            <div style={{ fontSize: '22px' }}>血液透析患者年龄及其构成</div>
          </ProCard>
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form1 />
          </ProCard>
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form1 />
            <div style={{ fontSize: '22px' }}>血液透析患者年龄及其构成</div>
          </ProCard>
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
