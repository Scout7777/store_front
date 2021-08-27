import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';

import Form10 from '@/pages/quality_equipment/components/Form10';
import Form10List from '@/pages/quality_equipment/components/Form10List';
import Form12 from '@/pages/quality_equipment/components/Form12';
import Form12List from '@/pages/quality_equipment/components/Form12List';
import Form14 from '@/pages/quality_equipment/components/Form14';
import Form14List from '@/pages/quality_equipment/components/Form14List';
import Form15 from '@/pages/quality_equipment/components/Form15';
import Form15List from '@/pages/quality_equipment/components/Form15List';
import Form16 from '@/pages/quality_equipment/components/Form16';
import Form16List from '@/pages/quality_equipment/components/Form16List';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard title={'透析设备管理统计数据'}>
      <Tabs key="1">
        <TabPane tab="设施统计数据" key="1">
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px' }}>
              <div style={{ fontSize: '22px' }}>血透室（中心）实际/核准开放床位数比例</div>
              <Form10 />
            </ProCard>
            <ProCard>
              <Form10List />
            </ProCard>
          </ProCard>
          <ProCard split={'vertical'} bordered={true}></ProCard>
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px' }}>
              <div style={{ fontSize: '22px' }}>血透室（中心）床位使用率</div>
              <Form12 />
            </ProCard>
            <ProCard>
              <Form12List />
            </ProCard>
          </ProCard>
          <ProCard split={'vertical'} bordered={true}></ProCard>
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px' }}>
              <div style={{ fontSize: '22px' }}>血透室（中心）各种透析用装置数量和构成</div>
              <Form14 />
            </ProCard>
            <ProCard>
              <Form14List />
            </ProCard>
          </ProCard>
        </TabPane>

        <TabPane tab="人员统计数据" key="2">
          <ProCard split={'vertical'} bordered={true}></ProCard>
        </TabPane>

        <TabPane tab="透析用水管理统计" key="3">
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px', width: '50%' }}>
              <div style={{ fontSize: '22px' }}>透析用水水质监测执行率</div>
              <Form15 />
            </ProCard>
            <ProCard>
              <Form15List />
            </ProCard>
          </ProCard>
          <ProCard split={'vertical'} bordered={true}>
            <ProCard style={{ height: '400px', width: '50%' }}>
              <div style={{ fontSize: '22px' }}>透析用水生物污染检验（细菌培养）执行率</div>
              <Form16 />
            </ProCard>
            <ProCard>
              <Form16List />
            </ProCard>
          </ProCard>
          <ProCard split={'vertical'} bordered={true}></ProCard>
          <ProCard split={'vertical'} bordered={true}></ProCard>
          <ProCard split={'vertical'} bordered={true}></ProCard>
        </TabPane>

        <TabPane tab="透析龄统计数据" key="4">
          <ProCard split={'vertical'} bordered={true}></ProCard>
          <ProCard split={'vertical'} bordered={true}></ProCard>
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
