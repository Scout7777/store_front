import { Collapse } from 'antd';
import Form37 from '@/pages/quality_result/components/Form37';
import Form37s from '@/pages/quality_result/components/Form37s';
import Form37sList from '@/pages/quality_result/components/Form37sList';
import Form37List from '@/pages/quality_result/components/Form37List';
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
          <Form37 />
          <Form37List />
        </p>
      </Panel>
      <Panel header="血液透析患者低血压控制率" key="2">
        <p>
          <Form37s />
          <Form37sList />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
