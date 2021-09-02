import { Collapse } from 'antd';
import Form40 from '@/pages/quality_result/components/Form40';
import Form40List from '@/pages/quality_result/components/Form40List';
import Form41 from '@/pages/quality_result/components/Form41';
import Form41List from '@/pages/quality_result/components/Form41List';
import Form42 from '@/pages/quality_result/components/Form42';
import Form42List from '@/pages/quality_result/components/Form42List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="血液透析患者年死亡率" key="1">
        <p>
          <Form40 />
          <Form40List />
        </p>
      </Panel>
      <Panel header="血液透析患者死亡原因构成比" key="2">
        <p>
          <Form41 />
          <Form41List />
        </p>
      </Panel>
      <Panel header="血液透析患者退出血液透析治疗原因构成" key="3">
        <p>
          <Form42 />
          <Form42List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
