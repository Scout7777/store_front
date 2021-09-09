import { Collapse } from 'antd';
import Form1List from '@/pages/quality_analysis/components/Form1List';
import Form2 from '@/pages/quality_analysis/components/Form2';
import Form3List from '@/pages/quality_analysis/components/Form3List';
import Form2List from '@/pages/quality_analysis/components/Form2List';
import React from 'react';
import ProCard from '@ant-design/pro-card';

const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <ProCard split={'horizontal'}>
      <ProCard>
        <div style={{ fontSize: '22px' }}>基本信息</div>
        <Form3List />
      </ProCard>
      <ProCard>
        <Collapse onChange={callback} defaultActiveKey={['3', '2']}>
          <Panel header="患者状态" key="2">
            <p>
              <Form1List />
            </p>
          </Panel>
          <Panel header="体重变化" key="3">
            <p>
              <Form2 />
              <Form2List />
            </p>
          </Panel>
        </Collapse>
      </ProCard>
    </ProCard>
  );
};

export default test;
