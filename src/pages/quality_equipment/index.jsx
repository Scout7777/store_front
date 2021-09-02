import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';
import Form10 from '@/pages/quality_equipment/components/Form10';
import Form10List from '@/pages/quality_equipment/components/Form10List';
import Form12 from '@/pages/quality_equipment/components/Form12';
import Form12List from '@/pages/quality_equipment/components/Form12List';
import Form14 from '@/pages/quality_equipment/components/Form14';
import Form14List from '@/pages/quality_equipment/components/Form14List';
import Search from '@/pages/quality_patient/components/Search';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard>
      <div style={{ fontSize: '24px' }}>透析设备管理统计数据</div>
      <Search />
      <Tabs key="1" size={'large'}>
        <TabPane tab="设施统计数据" key="1">
          <div style={{ fontSize: '22px', marginTop: '5px', whiteSpace: 'nowrap' }}>
            血透室（中心）实际/核准开放床位数比例
          </div>
          <ProCard style={{ height: '400px' }} split={'vertical'}>
            <ProCard style={{ height: '400px' }}>
              <Form10 />
            </ProCard>
            <ProCard>
              <div style={{ fontSize: '22px' }}>
                <Form10List />
              </div>
            </ProCard>
          </ProCard>

          <ProCard split={'vertical'}>
            <ProCard style={{ height: '400px' }}>
              <div style={{ fontSize: '22px' }}>血透室（中心）床位使用率</div>
              <Form12 />
            </ProCard>
            <ProCard>
              <Form12List />
            </ProCard>
          </ProCard>

          <ProCard split={'vertical'}>
            <ProCard style={{ height: '400px' }}>
              <div style={{ fontSize: '22px' }}>血透室（中心）床位使用率</div>
              <Form14 />
            </ProCard>
            <ProCard>
              <Form14List />
            </ProCard>
          </ProCard>
        </TabPane>

        <TabPane tab="人员统计数据" key="2"></TabPane>

        <TabPane tab="透析用水管理统计" key="3"></TabPane>

        <TabPane tab="透析龄统计数据" key="4"></TabPane>

        <TabPane tab="透析液管理统计" key="5"></TabPane>

        <TabPane tab="透析室消毒管理统计" key="6"></TabPane>
      </Tabs>
    </ProCard>
  );
};
