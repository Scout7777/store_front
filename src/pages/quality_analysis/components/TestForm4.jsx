import { Collapse } from 'antd';
import Form10 from '@/pages/quality_analysis/components/Form10';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="血压变化" key="1">
        <p></p>
      </Panel>
      <Panel header="脉搏" key="2">
        <p>
          <Form10 />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
