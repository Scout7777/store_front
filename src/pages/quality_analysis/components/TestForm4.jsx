import { Collapse } from 'antd';
import Form10 from '@/pages/quality_analysis/components/Form10';
import React from 'react';
import BloodPressure from '@/pages/quality_analysis/components/BloodPressure';
import Form10List from '@/pages/quality_analysis/components/Form10List';
import BloodPressureList from '@/pages/quality_analysis/components/BloodPressureList';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback} defaultActiveKey={['1', '2']}>
      <Panel header="血压变化" key="1">
        <p>
          {' '}
          <BloodPressure />
          <BloodPressureList />
        </p>
      </Panel>
      <Panel header="脉搏" key="2">
        <p>
          <Form10 />
          <Form10List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
