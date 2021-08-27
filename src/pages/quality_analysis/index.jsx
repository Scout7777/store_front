import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard title={'患者信息'}>
      <Tabs key="1">
        <TabPane tab="患者信息" key="1">
          <ProCard>
            <ProCard></ProCard>
          </ProCard>
        </TabPane>

        <TabPane tab="血管通路" key="2">
          <ProCard split={'horizontal'} gutter={[0, 96]}></ProCard>
        </TabPane>

        <TabPane tab="透析分析" key="3">
          <ProCard split={'vertical'}></ProCard>
        </TabPane>

        <TabPane tab="指标分析" key="4">
          <ProCard split={'horizontal'} gutter={[0, 96]}></ProCard>
        </TabPane>

        <TabPane tab="病症分析" key="5">
          <ProCard split={'horizontal'} gutter={[0, 96]}></ProCard>
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
