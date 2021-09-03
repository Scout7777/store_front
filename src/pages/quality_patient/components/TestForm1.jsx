import { Collapse } from 'antd';
import Form1 from '@/pages/quality_patient/components/Form1';
import Form1List from '@/pages/quality_patient/components/Form1List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="人口统计数据" key="1">
        <p>
          <Form1 />
          <Form1List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
