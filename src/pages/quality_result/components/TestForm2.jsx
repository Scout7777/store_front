import { Collapse } from 'antd';
import Form38 from '@/pages/quality_result/components/Form38';
import Form38List from '@/pages/quality_result/components/Form38List';
import Form39 from '@/pages/quality_result/components/Form39';
import Form39List from '@/pages/quality_result/components/Form39List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="维持性血液透析患者年住院率" key="1">
        <p>
          <Form38 />
          <Form38List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者住院原因构成比" key="2">
        <p>
          <Form39 />
          <Form39List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
