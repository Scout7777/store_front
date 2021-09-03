import { Collapse } from 'antd';
import Form27 from '@/pages/quality_process/components/Form27';
import Form27List from '@/pages/quality_process/components/Form27List';
import Form28 from '@/pages/quality_process/components/Form28';
import Form28List from '@/pages/quality_process/components/Form28List';
import Form29 from '@/pages/quality_process/components/Form29';
import Form29List from '@/pages/quality_process/components/Form29List';
import Form30 from '@/pages/quality_process/components/Form30';
import Form30List from '@/pages/quality_process/components/Form30List';
import Form31 from '@/pages/quality_process/components/Form31';
import Form31List from '@/pages/quality_process/components/Form31List';
import Form32 from '@/pages/quality_process/components/Form32';
import Form32List from '@/pages/quality_process/components/Form32List';
import Form33 from '@/pages/quality_process/components/Form33';
import Form33List from '@/pages/quality_process/components/Form33List';
import Form34 from '@/pages/quality_process/components/Form34';
import Form34List from '@/pages/quality_process/components/Form34List';
import React from 'react';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="维持性血液透析患者的血常规定时检验完成率" key="1">
        <p>
          <Form27 />
          <Form27List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的血液生化定时检验完成率" key="2">
        <p>
          <Form28 />
          <Form28List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的转铁蛋白饱和度定时检验完成率" key="3">
        <p>
          <Form29 />
          <Form29List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的血清铁蛋白定时检验完成率" key="4">
        <p>
          <Form30 />
          <Form30List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的全段甲状旁腺素(iPTH)定时检验完成率" key="5">
        <p>
          <Form31 />
          <Form31List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的血清前白蛋白定时检验完成率" key="6">
        <p>
          <Form32 />
          <Form32List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的C反应蛋白（CRP）定时检验完成率" key="7">
        <p>
          <Form33 />
          <Form33List />
        </p>
      </Panel>
      <Panel header="维持性血液透析患者的β2微球蛋白定时检验完成率" key="8">
        <p>
          <Form34 />
          <Form34List />
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
