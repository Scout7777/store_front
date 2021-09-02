import { Collapse } from 'antd';
import Form2 from '@/pages/quality_patient/components/Form2';
import Form2s from '@/pages/quality_patient/components/Form2s';
import Form2List from '@/pages/quality_patient/components/Form2List';
import Form3 from '@/pages/quality_patient/components/Form3';
import Form4 from '@/pages/quality_patient/components/Form4';
import Form4List from '@/pages/quality_patient/components/Form4List';
import Form5 from '@/pages/quality_patient/components/Form5';
import Form5List from '@/pages/quality_patient/components/Form5List';
import React from 'react';
import ProCard from '@ant-design/pro-card';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="区域内维持性血液透析患者患病率" key="1">
        <p>
          <ProCard split={'vertical'}>
            <ProCard title={'区域透析人数占区域总人口比'} style={{ height: '400px' }}>
              <Form2 />
            </ProCard>
            <ProCard title={'本院透析人数占区域透析人数比'} style={{ height: '400px' }}>
              <Form2s />
            </ProCard>
          </ProCard>
          <ProCard style={{ marginTop: '100px' }}>
            <Form2List />
          </ProCard>
        </p>
      </Panel>
      <Panel header="慢性肾衰竭血液透析患者各种慢性并发症患病率" key="2">
        <p>
          <Form3 />
        </p>
      </Panel>
      <Panel header="血液透析患者肾脏病原发病诊断构成比" key="3">
        <p>
          <Form4 />
          <Form4List />
        </p>
      </Panel>
      <Panel header="血液透析患者传染病诊断构成" key="4">
        <p>
          <Form5 />
          <Form5List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
