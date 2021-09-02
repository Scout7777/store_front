import { Collapse } from 'antd';
import Form47 from '@/pages/quality_result/components/Form47';
import Form47List from '@/pages/quality_result/components/Form47List';
import Form48List from '@/pages/quality_result/components/Form48List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="维持性血液透析患者乙型肝炎和丙型肝炎发病率" key="1">
        <p>
          <Form47 />
          <Form47List />
        </p>
      </Panel>
      <Panel header="	血液透析患者血源性传染病阴性转阳患者数" key="2">
        <p>
          <Form48List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
