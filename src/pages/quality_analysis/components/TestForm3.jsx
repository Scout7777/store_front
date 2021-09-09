import { Collapse } from 'antd';

import Form5List from '@/pages/quality_analysis/components/Form5List';
import Form6List from '@/pages/quality_analysis/components/Form6List';
import Form8 from '@/pages/quality_analysis/components/Form8';
import Form9 from '@/pages/quality_analysis/components/Form9';
import React from 'react';
import Form8List from '@/pages/quality_analysis/components/Form8List';
import Form9s from '@/pages/quality_analysis/components/Form9s';
import ProCard from '@ant-design/pro-card';
import Form9List from '@/pages/quality_analysis/components/Form9List';
import Form9sList from '@/pages/quality_analysis/components/Form9sList';

const { Panel } = Collapse;
function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback} defaultActiveKey={['3', '2', '1', '4']}>
      <Panel header="透析方式/透析器" key="1">
        <p>
          <Form5List />
        </p>
      </Panel>
      <Panel header="抗凝剂" key="2">
        <p>
          <Form6List />
        </p>
      </Panel>
      <Panel header="超滤量" key="3">
        <p>
          <Form8 />
          <Form8List />
        </p>
      </Panel>
      <Panel header="透析充分性" key="4">
        <p>
          <ProCard split={'vertical'}>
            <ProCard title={'尿素清除指数(Kt/V)'} style={{ height: '400px' }}>
              <Form9 />
            </ProCard>
            <ProCard title={'尿素下降率(URR)'} style={{ height: '400px' }}>
              <Form9s />
            </ProCard>
          </ProCard>
          <ProCard split={'vertical'}>
            <ProCard title={'尿素清除指数(Kt/V)'} style={{ height: '400px' }}>
              <Form9List />
            </ProCard>
            <ProCard title={'尿素下降率(URR)'} style={{ height: '400px' }}>
              <Form9sList />
            </ProCard>
          </ProCard>
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
