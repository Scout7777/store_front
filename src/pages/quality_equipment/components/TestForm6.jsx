import { Collapse } from 'antd';

import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="人口统计数据" key="1">
        <p></p>
      </Panel>
      <Panel header="人口统计数据" key="2">
        <p></p>
      </Panel>
      <Panel header="人口统计数据" key="3">
        <p></p>
      </Panel>
      <Panel header="人口统计数据" key="4">
        <p></p>
      </Panel>
      <Panel header="人口统计数据" key="5">
        <p></p>
      </Panel>
    </Collapse>
  );
};

export default test;
