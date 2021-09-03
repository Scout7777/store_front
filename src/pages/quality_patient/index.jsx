import React from 'react';
import { Tabs } from 'antd';
import { Card } from 'antd';
import Search from '@/pages/quality_patient/components/Search';
import TestForm1 from '@/pages/quality_patient/components/TestForm1';
import TestForm2 from '@/pages/quality_patient/components/TestForm2';
import TestForm3 from '@/pages/quality_patient/components/TestForm3';
import TestForm4 from '@/pages/quality_patient/components/TestForm4';

const { TabPane } = Tabs;

export default () => {
  return (
    <Card>
      <div style={{ fontSize: '24px' }}>患者统计数据</div>
      <Search />
      <Tabs key="1" size={'large'}>
        <TabPane tab="人口统计数据" key="1">
          <TestForm1 />
        </TabPane>

        <TabPane tab="病症统计数据" key="2">
          <TestForm2 />
        </TabPane>

        <TabPane tab="支付统计数据" key="3">
          <TestForm3 />
        </TabPane>

        <TabPane tab="透析龄统计数据" key="4">
          <TestForm4 />
        </TabPane>
      </Tabs>
    </Card>
  );
};
