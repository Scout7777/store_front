import { Collapse } from 'antd';

import React from 'react';
import MachineGerm from '@/pages/quality_equipment/components/MachineGerm';
import MachineEndotoxin from '@/pages/quality_equipment/components/MachineEndotoxin';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="透析机透析液细菌培养检验" key="1">
        <p>
          <MachineGerm />
          <div style={{ fontSize: '22px', whiteSpace: 'pre-wrap' }}>
            检测次数：22次 合格次数：15次 合格率：22%
          </div>
        </p>
      </Panel>
      <Panel header="透析机透析液内毒素检验" key="2">
        <p>
          <MachineEndotoxin />
          <div style={{ fontSize: '22px', whiteSpace: 'pre-wrap' }}>
            检测次数：22次 合格次数：15次 合格率：22%
          </div>
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
