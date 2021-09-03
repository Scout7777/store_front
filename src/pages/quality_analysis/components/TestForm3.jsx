import { Collapse } from 'antd';

import Form5List from '@/pages/quality_analysis/components/Form5List';
import Form6List from '@/pages/quality_analysis/components/Form6List';
import Form8 from '@/pages/quality_analysis/components/Form8';
import Form9 from '@/pages/quality_analysis/components/Form9';
import React from 'react';
import Form8List from '@/pages/quality_analysis/components/Form8List';

const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="透析方式/透析器" key="1">
        <p>
          <Form5List />
        </p>
      </Panel>
      <Panel header="抗凝剂" key="2">
        <p>
          <Form6List />
        </p>
      </Panel>
      <Panel header="超滤量" key="3">
        <p>
          <Form8 />
          <Form8List />
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
