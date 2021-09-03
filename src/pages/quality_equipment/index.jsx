import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';
import Search from '@/pages/quality_patient/components/Search';
import TestForm1 from '@/pages/quality_equipment/components/TestForm1';
import TestForm2 from '@/pages/quality_equipment/components/TestForm2';
import TestForm3 from '@/pages/quality_equipment/components/TestForm3';
import TestForm4 from '@/pages/quality_equipment/components/TestForm4';
import TestForm5 from '@/pages/quality_equipment/components/TestForm5';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard>
      <div style={{ fontSize: '24px' }}>透析设备管理统计数据</div>
      <Search />
      <Tabs key="1" size={'large'}>
        <TabPane tab="设施统计数据" key="1">
          <TestForm1 />
        </TabPane>

        <TabPane tab="人员统计数据" key="2">
          <TestForm2 />
        </TabPane>

        <TabPane tab="透析用水管理统计" key="3">
          <TestForm3 />
        </TabPane>

        <TabPane tab="透析液管理统计" key="4">
          <TestForm4 />
        </TabPane>

        <TabPane tab="透析室消毒管理统计" key="5">
          <TestForm5 />
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
