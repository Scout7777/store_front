import { Collapse } from 'antd';
import Form1List from '@/pages/quality_analysis/components/Form1List';
import Form2 from '@/pages/quality_analysis/components/Form2';
import Form3List from '@/pages/quality_analysis/components/Form3List';
import Form2List from '@/pages/quality_analysis/components/Form2List';
import React from 'react';

const { Panel } = Collapse;
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
          <Form1List />
        </p>
      </Panel>
      <Panel header="体重变化" key="3">
        <p>
          <Form2 />
          <Form2List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
