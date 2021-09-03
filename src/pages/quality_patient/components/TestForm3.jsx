import { Collapse } from 'antd';
import Form6 from '@/pages/quality_patient/components/Form6';
import Form6List from '@/pages/quality_patient/components/Form6List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="慢性肾衰竭血液透析患者医疗支付类型构成" key="1">
        <p>
          <Form6 />
          <Form6List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
