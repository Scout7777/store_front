import { Collapse } from 'antd';
import Form35 from '@/pages/quality_process/components/Form35';
import Form35List from '@/pages/quality_process/components/Form35List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="维持性血液透析患者的尿素清除指数(Kt/V)和尿素下降率(URR)定时记录完成率" key="1">
        <p>
          <Form35 />
          <Form35List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
