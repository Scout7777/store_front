import { Collapse } from 'antd';
import Form4List from '@/pages/quality_analysis/components/Form4List';
import React from 'react';
import Form4sList from '@/pages/quality_analysis/components/Form4sList';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback} defaultActiveKey={['1', '2']}>
      <Panel header="状态" key="1">
        <p>
          <Form4List />
        </p>
      </Panel>
      <Panel header="并发症记录" key="2">
        <p>
          <Form4sList />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
