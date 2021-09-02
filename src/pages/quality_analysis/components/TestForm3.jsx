import { Collapse, Tabs } from 'antd';

import Form5List from '@/pages/quality_analysis/components/Form5List';
import Form6List from '@/pages/quality_analysis/components/Form6List';
import Form8 from '@/pages/quality_analysis/components/Form8';
import Form9 from '@/pages/quality_analysis/components/Form9';
// import Form8List from '@/pages/quality_analysis/components/Form8List';
import React from 'react';

const { Panel } = Collapse;
const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="透析方式/透析器" key="1">
        <p>
          <Tabs key="1" size={'large'}>
            <TabPane tab="8.11" key="1">
              <Form5List />
            </TabPane>
            <TabPane tab="8.12" key="2">
              <Form5List />
            </TabPane>
            <TabPane tab="8.13" key="3">
              <Form5List />
            </TabPane>
            <TabPane tab="8.14" key="4">
              <Form5List />
            </TabPane>
            <TabPane tab="8.15" key="5">
              <Form5List />
            </TabPane>
          </Tabs>
        </p>
      </Panel>
      <Panel header="抗凝剂" key="2">
        <p>
          <Tabs key="1" size={'large'}>
            <TabPane tab="8.11" key="1">
              <Form6List />
            </TabPane>
            <TabPane tab="8.12" key="2">
              <Form6List />
            </TabPane>
            <TabPane tab="8.13" key="3">
              <Form6List />
            </TabPane>
            <TabPane tab="8.14" key="4">
              <Form6List />
            </TabPane>
            <TabPane tab="8.15" key="5">
              <Form6List />
            </TabPane>
          </Tabs>
        </p>
      </Panel>
      <Panel header="超滤量" key="3">
        <p>
          <Form8 />
        </p>
      </Panel>
      <Panel header="透析充分性" key="4">
        <p>
          <Form9 />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
