import { Collapse } from 'antd';
import Form11 from '@/pages/quality_analysis/components/Form11';
import Form12List from '@/pages/quality_analysis/components/Form12List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="检验指标" key="1">
        <p>
          <Form11 />
        </p>
      </Panel>
      <Panel header="并发症" key="2">
        <p>
          <Form12List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
