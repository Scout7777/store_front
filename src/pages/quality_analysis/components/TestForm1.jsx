import { Collapse, Tabs } from 'antd';
import Form1List from '@/pages/quality_analysis/components/Form1List';
import Form2 from '@/pages/quality_analysis/components/Form2';
import Form3List from '@/pages/quality_analysis/components/Form3List';
import Form2List from '@/pages/quality_analysis/components/Form2List';
import React from 'react';

const { Panel } = Collapse;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="基本信息" key="1">
        <p>
          <Form3List />
        </p>
      </Panel>
      <Panel header="患者状态" key="2">
        <p>
          <Tabs key="1" size={'large'}>
            <TabPane tab="8.11" key="1">
              <Form1List />
            </TabPane>
            <TabPane tab="8.12" key="2">
              <Form1List />
            </TabPane>
            <TabPane tab="8.13" key="3">
              <Form1List />
            </TabPane>
            <TabPane tab="8.14" key="4">
              <Form1List />
            </TabPane>
            <TabPane tab="8.15" key="5">
              <Form1List />
            </TabPane>
          </Tabs>
        </p>
      </Panel>
      <Panel header="体重变化" key="3">
        <p>
          <Form2 />
          <Tabs key="1" size={'large'} style={{ height: '400px' }}>
            <TabPane tab="8.11" key="1">
              <Form2List />
            </TabPane>
            <TabPane tab="8.12" key="2">
              <Form2List />
            </TabPane>
            <TabPane tab="8.13" key="3">
              <Form2List />
            </TabPane>
            <TabPane tab="8.14" key="4">
              <Form2List />
            </TabPane>
            <TabPane tab="8.15" key="5">
              <Form2List />
            </TabPane>
          </Tabs>
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
