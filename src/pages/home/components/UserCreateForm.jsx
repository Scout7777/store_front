import React from 'react';
import { Modal, Tabs } from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
import BasicCreateForm from './BasicCreateForm';

const { TabPane } = Tabs;

const CreateForm = (props) => {
  return (
    <Modal title="患者信息" width={1200} visible={props.visible} onCancel={props.onCancel}>
      <Tabs defaultActiveKey="1" tabPosition="left">
        <TabPane tab="电子病历" key="1">
          <PageContainer style={{ padding: 24 }}>
            <BasicCreateForm />
          </PageContainer>
        </TabPane>
        <TabPane tab="诊断信息" key="2">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="过敏史" key="3">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="血管通路" key="4">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="长期透析医嘱" key="5">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="传染病检察" key="6">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="排床规律" key="7">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="发卡" key="8">
          Content of Tab Pane 1
        </TabPane>
      </Tabs>
    </Modal>
  );
};
export default CreateForm;
