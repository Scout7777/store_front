import { Collapse } from 'antd';
import React from 'react';
import TestForm5_Form1List from '@/pages/quality_analysis/components/TestForm5_Form1List';
import TestForm5_Form1 from '@/pages/quality_analysis/components/TestForm5_Form1';
import TestForm5_Form2 from '@/pages/quality_analysis/components/TestForm5_Form2';
import TestForm5_Form2List from '@/pages/quality_analysis/components/TestForm5_Form2List';
import TestForm5_Form3 from '@/pages/quality_analysis/components/TestForm5_Form3';
import TestForm5_Form3List from '@/pages/quality_analysis/components/TestForm5_Form3List';
import TestForm5_Form4 from '@/pages/quality_analysis/components/TestForm5_Form4';
import TestForm5_Form4List from '@/pages/quality_analysis/components/TestForm5_Form4List';
import TestForm5_Form5 from '@/pages/quality_analysis/components/TestForm5_Form5';
import TestForm5_Form5List from '@/pages/quality_analysis/components/TestForm5_Form5List';
import TestForm5_Form6 from '@/pages/quality_analysis/components/TestForm5_Form6';
import TestForm5_Form6List from '@/pages/quality_analysis/components/TestForm5_Form6List';
import TestForm5_Form7 from '@/pages/quality_analysis/components/TestForm5_Form7';
import TestForm5_Form7List from '@/pages/quality_analysis/components/TestForm5_Form7List';
import TestForm5_Form8 from '@/pages/quality_analysis/components/TestForm5_Form8';
import TestForm5_Form8List from '@/pages/quality_analysis/components/TestForm5_Form8List';
import TestForm5_Form9 from '@/pages/quality_analysis/components/TestForm5_Form9';
import TestForm5_Form9List from '@/pages/quality_analysis/components/TestForm5_Form9List';
import TestForm5_Form10 from '@/pages/quality_analysis/components/TestForm5_Form10';
import TestForm5_Form10List from '@/pages/quality_analysis/components/TestForm5_Form10List';
import TestForm5_Form1Lists from '@/pages/quality_analysis/components/TestForm5_Form1Lists';
import TestForm5_Form2Lists from '@/pages/quality_analysis/components/TestForm5_Form2Lists';
import TestForm5_Form3Lists from '@/pages/quality_analysis/components/TestForm5_Form3Lists';
import TestForm5_Form4Lists from '@/pages/quality_analysis/components/TestForm5_Form4Lists';
import TestForm5_Form5Lists from '@/pages/quality_analysis/components/TestForm5_Form5Lists';
import TestForm5_Form6Lists from '@/pages/quality_analysis/components/TestForm5_Form6Lists';
import TestForm5_Form7Lists from '@/pages/quality_analysis/components/TestForm5_Form7Lists';
import TestForm5_Form8Lists from '@/pages/quality_analysis/components/TestForm5_Form8Lists';
import TestForm5_Form9Lists from '@/pages/quality_analysis/components/TestForm5_Form9Lists';
import TestForm5_Form10Lists from '@/pages/quality_analysis/components/TestForm5_Form10Lists';
import Form11List from '@/pages/quality_analysis/components/Form11List';

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}
const test = () => {
  return (
    <Collapse onChange={callback}>
      <Panel header="检验指标" key="1">
        <p>
          <Collapse onChange={callback}>
            <Panel header="血常规" key="1">
              <p>
                <TestForm5_Form1 />
                <TestForm5_Form1List />
                <TestForm5_Form1Lists />
              </p>
            </Panel>
            <Panel header="血液生化" key="2">
              <p>
                <TestForm5_Form2 />
                <TestForm5_Form2List />
                <TestForm5_Form2Lists />
              </p>
            </Panel>
            <Panel header="血清铁蛋白" key="3">
              <p>
                <TestForm5_Form3 />
                <TestForm5_Form3List />
                <TestForm5_Form3Lists />
              </p>
            </Panel>
            <Panel header="转铁蛋白饱和度" key="4">
              <p>
                <TestForm5_Form4 />
                <TestForm5_Form4List />
                <TestForm5_Form4Lists />
              </p>
            </Panel>
            <Panel header="全段甲状旁腺素(iPTH)" key="5">
              <p>
                <TestForm5_Form5 />
                <TestForm5_Form5List />
                <TestForm5_Form5Lists />
              </p>
            </Panel>
            <Panel header="血清前白蛋白" key="6">
              <p>
                <TestForm5_Form6 />
                <TestForm5_Form6List />
                <TestForm5_Form6Lists />
              </p>
            </Panel>
            <Panel header="C 反应蛋白（CRP）" key="7">
              <p>
                <TestForm5_Form7 />
                <TestForm5_Form7List />
                <TestForm5_Form7Lists />
              </p>
            </Panel>
            <Panel header="β2 微球蛋白" key="8">
              <p>
                <TestForm5_Form8 />
                <TestForm5_Form8List />
                <TestForm5_Form8Lists />
              </p>
            </Panel>
            <Panel header="血钙" key="9">
              <p>
                <TestForm5_Form9 />
                <TestForm5_Form9List />
                <TestForm5_Form9Lists />
              </p>
            </Panel>
            <Panel header="血磷" key="10">
              <p>
                <TestForm5_Form10 />
                <TestForm5_Form10List />
                <TestForm5_Form10Lists />
              </p>
            </Panel>
          </Collapse>
        </p>
      </Panel>
      <Panel header="并发症" key="2">
        <p>
          <Collapse onChange={callback}>
            <Panel header="透中并发症" key="1">
              <p>
                <Form11List />
              </p>
            </Panel>
            <Panel header="透析并发症" key="2">
              <p></p>
            </Panel>
            <Panel header="其他并发症" key="3">
              <p></p>
            </Panel>
          </Collapse>
        </p>
      </Panel>
    </Collapse>
  );
};

export default test;
