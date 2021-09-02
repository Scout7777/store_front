import { Collapse } from 'antd';
import Form26 from '@/pages/quality_process/components/Form26';
import Form26List from '@/pages/quality_process/components/Form26List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="新入患者标志物检测完成率" key="1">
        <p>
          <Form26 />
          <Form26List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
