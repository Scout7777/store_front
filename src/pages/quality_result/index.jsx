import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';
import Search from '@/pages/quality_result/components/Search';

import TestForm1 from '@/pages/quality_result/components/TestForm1';
import TestForm2 from '@/pages/quality_result/components/TestForm2';
import TestForm3 from '@/pages/quality_result/components/TestForm3';
import TestForm4 from '@/pages/quality_result/components/TestForm4';
import TestForm5 from '@/pages/quality_result/components/TestForm5';
import TestForm6 from '@/pages/quality_result/components/TestForm6';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard>
      <div style={{ fontSize: '24px' }}>血液透析质量控制结果指标</div>
      <Search />
      <Tabs key="1" size={'large'}>
        <TabPane tab="透析中并发症" key="1">
          <TestForm1 />
        </TabPane>

        <TabPane tab="住院情况" key="2">
          <TestForm2 />
        </TabPane>

        <TabPane tab="退出情况" key="3">
          <TestForm3 />
        </TabPane>

        <TabPane tab="血管通路质量管理" key="4">
          <TestForm4 />
        </TabPane>

        <TabPane tab="感染管理" key="5">
          <TestForm5 />
        </TabPane>

        <TabPane tab="血透质量管理" key="6">
          <TestForm6 />
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
