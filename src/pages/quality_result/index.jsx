import React from 'react';
import { Tabs } from 'antd';
import { Tag } from 'antd';
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
              <Tag color="magenta">血液透析患者年龄及其构成</Tag>
            </ProCard>
            <ProCard>
              <Form1List />
            </ProCard>
          </ProCard>
        </TabPane>
        <TabPane tab="病症统计数据" key="2">
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px', width: '50%' }}>
              <Tag color="magenta">区域内维持性血液透析患者患病率</Tag>
            </ProCard>
            <ProCard>
              <Form1List />
            </ProCard>
          </ProCard>
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form3 />
            <Tag color="magenta">慢性肾衰竭血液透析患者各种慢性并发症患病率</Tag>
          </ProCard>
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px', width: '50%' }}>
              <Form4 />
              <Tag color="magenta">血液透析患者肾脏病原发病诊断构成比</Tag>
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
            <Tag color="magenta">慢性肾衰竭血液透析患者医疗支付类型构成</Tag>
          </ProCard>
        </TabPane>
        <TabPane tab="透析龄统计数据" key="4">
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form1 />
            <Tag color="magenta">慢性肾衰竭维持性血液透析患者透析龄构成比</Tag>
          </ProCard>
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form1 />
          </ProCard>
          <ProCard style={{ height: '400px', width: '100%' }} bordered={true}>
            <Form1 />
            <Tag color="magenta">各种血液透析模式例次的构成</Tag>
          </ProCard>
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
