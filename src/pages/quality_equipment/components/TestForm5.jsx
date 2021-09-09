import { Collapse } from 'antd';

import React from 'react';
import RoomThing from '@/pages/quality_equipment/components/RoomThing';
import RoomAir from '@/pages/quality_equipment/components/RoomAir';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="血液透析治疗室消毒检验" key="1">
        <p>
          <Collapse onChange={callback}>
            <Panel header="物表消毒检验" key="1">
              <p>
                <RoomThing />
                <div style={{ fontSize: '22px', whiteSpace: 'pre-wrap' }}>
                  检测次数：22次 | | 合格次数：15次 | | 合格率：22%
                </div>
              </p>
            </Panel>
            <Panel header="空气消毒检验" key="2">
              <p>
                <RoomAir />
                <div style={{ fontSize: '22px', whiteSpace: 'pre-wrap' }}>
                  检测次数：22次 | | 合格次数：15次 | | 合格率：22%
                </div>
              </p>
            </Panel>
          </Collapse>
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
