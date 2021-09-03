import { Collapse } from 'antd';

import React from 'react';
import WaterQuality from '@/pages/quality_equipment/components/WaterQuality';
import WaterGerm from '@/pages/quality_equipment/components/WaterGerm';
import WaterEndotoxin from '@/pages/quality_equipment/components/WaterEndotoxin';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="透析用水水质监测" key="1">
        <p>
          <WaterQuality />
          <div style={{ fontSize: '22px', whiteSpace: 'pre-wrap' }}>
            检测次数：22次 合格次数：15次 合格率：22%
          </div>
        </p>
      </Panel>
      <Panel header="透析用水生物污染（细菌培养）检验" key="2">
        <p>
          <WaterGerm />
          <div style={{ fontSize: '22px', whiteSpace: 'pre-wrap' }}>
            检测次数：22次 合格次数：15次 合格率：22%
          </div>
        </p>
      </Panel>
      <Panel header="透析用水生物污染物（内毒素）检验" key="3">
        <p>
          <WaterEndotoxin />
          <div style={{ fontSize: '22px', whiteSpace: 'pre-wrap' }}>
            检测次数：22次 合格次数：15次 合格率：22%
          </div>
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
