import { Collapse } from 'antd';
import Form49 from '@/pages/quality_result/components/Form49';
import Form49List from '@/pages/quality_result/components/Form49List';
import Form50 from '@/pages/quality_result/components/Form50';
import Form50List from '@/pages/quality_result/components/Form50List';
import Form51 from '@/pages/quality_result/components/Form51';
import Form51List from '@/pages/quality_result/components/Form51List';
import Form52 from '@/pages/quality_result/components/Form52';
import Form52List from '@/pages/quality_result/components/Form52List';
import Form53 from '@/pages/quality_result/components/Form53';
import Form53List from '@/pages/quality_result/components/Form53List';
import Form54 from '@/pages/quality_result/components/Form54';
import Form54List from '@/pages/quality_result/components/Form54List';
import Form55 from '@/pages/quality_result/components/Form55';
import Form55List from '@/pages/quality_result/components/Form55List';
import Form56 from '@/pages/quality_result/components/Form56';
import Form56List from '@/pages/quality_result/components/Form56List';
import Form57 from '@/pages/quality_result/components/Form57';
import Form57List from '@/pages/quality_result/components/Form57List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="血液透析患者高血压控制率" key="1">
        <p>
          <Form49 />
          <Form49List />
        </p>
      </Panel>
      <Panel header="肾性贫血控制率" key="2">
        <p>
          <Form50 />
          <Form50List />
        </p>
      </Panel>
      <Panel header="血液透析患者血钙控制率" key="3">
        <p>
          <Form51 />
          <Form51List />
        </p>
      </Panel>
      <Panel header="血液透析患者血磷控制率" key="4">
        <p>
          <Form52 />
          <Form52List />
        </p>
      </Panel>
      <Panel header="血液透析患者血iPTH控制率" key="5">
        <p>
          <Form53 />
          <Form53List />
        </p>
      </Panel>
      <Panel header="血液透析患者血清白蛋白控制率" key="6">
        <p>
          <Form54 />
          <Form54List />
        </p>
      </Panel>
      <Panel header="血液透析患者Kt/V和URR控制率" key="7">
        <p>
          <Form55 />
          <Form55List />
        </p>
      </Panel>
      <Panel header="透析间期体重增长控制率" key="8">
        <p>
          <Form56 />
          <Form56List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者慢性肾脏病-矿物质代谢骨异常（CKD-MBD）指标控制率" key="9">
        <p>
          {' '}
          <Form57 />
          <Form57List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
