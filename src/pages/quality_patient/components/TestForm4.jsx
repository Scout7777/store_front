import { Collapse } from 'antd';
import Form7 from '@/pages/quality_patient/components/Form7';
import Form8List from '@/pages/quality_patient/components/Form8List';
import Form9 from '@/pages/quality_patient/components/Form9';
import Form9List from '@/pages/quality_patient/components/Form9List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="慢性肾衰竭维持性血液透析患者透析龄构成比" key="1">
        <p>
          <Form7 />
        </p>
      </Panel>
      <Panel header="慢性肾衰竭维持性血液透析患者透析龄平均数、标准差、中位数" key="2">
        <p>
          <Form8List />
        </p>
      </Panel>
      <Panel header="各种血液透析模式例次的构成" key="3">
        <p>
          <Form9 />
          <Form9List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
