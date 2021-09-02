import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';
import Search from '@/pages/quality_analysis/components/Search';
import TestForm1 from '@/pages/quality_analysis/components/TestForm1';
import TestForm2 from '@/pages/quality_analysis/components/TestForm2';
import TestForm3 from '@/pages/quality_analysis/components/TestForm3';
import TestForm4 from '@/pages/quality_analysis/components/TestForm4';
import TestForm5 from '@/pages/quality_analysis/components/TestForm5';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard>
      <div style={{ fontSize: '24px' }}>患者分析</div>
      <Search />
      <Tabs key="1" size={'large'}>
        <TabPane tab="患者信息" key="1">
          <TestForm1 />
        </TabPane>

        <TabPane tab="血管通路" key="2">
          <TestForm2 />
        </TabPane>

        <TabPane tab="透析分析" key="3">
          <TestForm3 />
        </TabPane>

        <TabPane tab="指标分析" key="4">
          <TestForm4 />
        </TabPane>

        <TabPane tab="病症分析" key="5">
          <TestForm5 />
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
