import React, { useState } from 'react';
import { Row, Modal, Menu } from 'antd';
import ProForm, { ProFormText } from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
// import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  const [current, setCurrent] = useState('电子病历');
  return (
    <Modal title="患者信息" width={900} visible={props.visible} onCancel={props.onCancel}>
      <Row>
        <Menu
          defaultSelectedKeys={[current]}
          onClick={({ key }) => {
            setCurrent(key);
          }}
        >
          <Menu.Item key="电子病历">电子病历</Menu.Item>
          <Menu.Item key="诊断信息">诊断信息</Menu.Item>
          <Menu.Item key="过敏史">过敏史</Menu.Item>
          <Menu.Item key="血管通路">血管通路</Menu.Item>
          <Menu.Item key="长期透析医嘱">长期透析医嘱</Menu.Item>
          <Menu.Item key="传染病检察">传染病检察</Menu.Item>
          <Menu.Item key="排床规律">排床规律</Menu.Item>
          <Menu.Item key="排床规律">发卡</Menu.Item>
        </Menu>
        <PageContainer title={current}>
          <ProForm style={{ margin: 24 }}>
            <ProFormText
              name="name"
              label="姓名"
              width="md"
              rules={[{ required: true, message: '请输入内容' }]}
            />
          </ProForm>
        </PageContainer>
      </Row>
    </Modal>
  );
};
export default CreateForm;
