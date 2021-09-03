import { Collapse } from 'antd';
import Form43 from '@/pages/quality_result/components/Form43';
import Form43List from '@/pages/quality_result/components/Form43List';
import Form44 from '@/pages/quality_result/components/Form44';
import Form44List from '@/pages/quality_result/components/Form44List';
import Form45 from '@/pages/quality_result/components/Form45';
import Form45List from '@/pages/quality_result/components/Form45List';
import Form46 from '@/pages/quality_result/components/Form46';
import Form46List from '@/pages/quality_result/components/Form46List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="维持性血液透析患者长期透析血管通路构成比" key="1">
        <p>
          <Form43 />
          <Form43List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的动静脉内瘘长期使用率" key="2">
        <p>
          <Form44 />
          <Form44List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者动静脉内瘘通畅率" key="3">
        <p>
          <Form45 />
          <Form45List />
        </p>
      </Panel>
      <Panel header="血液透析患者导管相关性感染发病率" key="4">
        <p>
          <Form46 />
          <Form46List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
