import { Collapse } from 'antd';

import React from 'react';
import Form10 from '@/pages/quality_equipment/components/Form10';
import Form10List from '@/pages/quality_equipment/components/Form10List';
import Form12 from '@/pages/quality_equipment/components/Form12';
import Form12List from '@/pages/quality_equipment/components/Form12List';
import Form14 from '@/pages/quality_equipment/components/Form14';
import Form14List from '@/pages/quality_equipment/components/Form14List';
import Form13List from '@/pages/quality_equipment/components/Form13List';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="血透室（中心）实际/核准开放床位数比例" key="1">
        <p>
          <Form10 />
          <Form10List />
        </p>
      </Panel>

      <Panel header="血透室（中心）床位使用率" key="3">
        <p>
          <Form12 />
          <Form12List />
        </p>
      </Panel>
      <Panel header="血透室（中心）布局和功能区完善程度" key="4">
        <p>
          <Form13List />
        </p>
      </Panel>
      <Panel header="血透室（中心）各种透析用装置数量和构成" key="5">
        <p>
          <Form14 />
          <Form14List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
