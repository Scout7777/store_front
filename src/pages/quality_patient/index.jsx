import React from 'react';
import { Tabs } from 'antd';
import ProCard from '@ant-design/pro-card';
import Form1 from '@/pages/quality_patient/components/Form1';
import Form1List from '@/pages/quality_patient/components/Form1List';
import Form3 from '@/pages/quality_patient/components/Form3';
import Form4 from '@/pages/quality_patient/components/Form4';
import Form4List from '@/pages/quality_patient/components/Form4List';
import Form5 from '@/pages/quality_patient/components/Form5';
import Form5List from '@/pages/quality_patient/components/Form5List';
import Form6 from '@/pages/quality_patient/components/Form6';
import Form6List from '@/pages/quality_patient/components/Form6List';
import Form7 from '@/pages/quality_patient/components/Form7';
import Form8List from '@/pages/quality_patient/components/Form8List';
import Form9 from '@/pages/quality_patient/components/Form9';
import Form9List from '@/pages/quality_patient/components/Form9List';

const { TabPane } = Tabs;

export default () => {
  return (
    <ProCard title={'患者统计数据'}>
      <Tabs key="1">
        <TabPane tab="人口统计数据" key="1">
          <div style={{ fontSize: '22px', marginTop: '5px', whiteSpace: 'nowrap' }}>
            血液透析患者年龄及其构成
          </div>
          <ProCard style={{ height: '400px' }} split={'vertical'}>
            <ProCard style={{ height: '400px' }}>
              <Form1 />
            </ProCard>
            <ProCard>
              <div style={{ fontSize: '22px' }}>
                <Form1List />
              </div>
            </ProCard>
          </ProCard>
        </TabPane>

        <TabPane tab="病症统计数据" key="2">
          <ProCard split={'horizontal'} gutter={[0, 48]}>
            <div style={{ fontSize: '22px', marginTop: '30px', whiteSpace: 'nowrap' }}>
              慢性肾衰竭血液透析患者各种慢性并发症患病率
            </div>
            <ProCard style={{ height: '600px', marginTop: '20px' }}>
              <Form3 />
            </ProCard>
            <ProCard split={'vertical'}>
              <ProCard style={{ height: '400px' }}>
                <div style={{ fontSize: '22px' }}>血液透析患者肾脏病原发病诊断构成比</div>
                <Form4 />
              </ProCard>
              <ProCard>
                <Form4List />
              </ProCard>
            </ProCard>
            <ProCard split={'vertical'}>
              <ProCard style={{ height: '400px', width: '60%' }}>
                <div style={{ fontSize: '22px' }}>血液透析患者传染病诊断构成</div>
                <Form5 />
              </ProCard>
              <ProCard>
                <Form5List />
              </ProCard>
            </ProCard>
          </ProCard>
        </TabPane>

        <TabPane tab="支付统计数据" key="3">
          <div style={{ fontSize: '22px', marginTop: '5px', whiteSpace: 'nowrap' }}>
            慢性肾衰竭血液透析患者医疗支付类型构成
          </div>
          <ProCard split={'vertical'}>
            <ProCard style={{ height: '400px' }}>
              <Form6 />
            </ProCard>
            <ProCard>
              <Form6List />
            </ProCard>
          </ProCard>
        </TabPane>

        <TabPane tab="透析龄统计数据" key="4">
          <ProCard split={'horizontal'} gutter={[0, 48]}>
            <div style={{ fontSize: '22px', marginTop: '30px', whiteSpace: 'nowrap' }}>
              慢性肾衰竭维持性血液透析患者透析龄构成比
            </div>
            <ProCard split={'vertical'}>
              <ProCard style={{ height: '400px' }}>
                <Form7 />
              </ProCard>
              <ProCard>
                <Form8List style={{ height: '400px' }} />
              </ProCard>
            </ProCard>
            <ProCard split={'vertical'}>
              <ProCard headerBordered={true} style={{ height: '400px' }}>
                <div style={{ fontSize: '22px' }}>各种血液透析模式例次的构成</div>
                <Form9 />
              </ProCard>
              <ProCard>
                <Form9List />
              </ProCard>
            </ProCard>
          </ProCard>
        </TabPane>
      </Tabs>
    </ProCard>
  );
};
