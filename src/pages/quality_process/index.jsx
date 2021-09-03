import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';

import Search from '@/pages/quality_process/components/Search';

import TestForm1 from '@/pages/quality_process/components/TestForm1';
import TestForm2 from '@/pages/quality_process/components/TestForm2';
import TestForm3 from '@/pages/quality_process/components/TestForm3';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard>
      <div style={{ fontSize: '24px' }}>血液透析质量控制过程指标</div>
      <Search />
      <Tabs key="1" size={'large'}>
        <TabPane tab="新入患者标志物检测完成率" key="1">
          <TestForm1 />
        </TabPane>

        <TabPane tab="维持患者定时检测完成率" key="2">
          <TestForm2 />
        </TabPane>

        <TabPane tab="维持患者定时记录完成率" key="3">
          <TestForm3 />
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
