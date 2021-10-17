import React from 'react';
import { Row, Col } from 'antd';
import {
  ProFormSelect,
  ProFormText,
  ModalForm,
  ProFormRadio,
  ProFormDatePicker,
} from '@ant-design/pro-form';

const CreateForm = (props) => {
  return (
    <ModalForm
      title="购买商品"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
        bodyStyle: { padding: '32px 0 36px 68px' },
      }}
      onFinish={props.onSubmit}
    >
      <Row>
        <Col span={12}>
          <ProFormRadio.Group
            name="gender"
            label="交易方式"
            rules={[{ required: true }]}
            options={[
              { value: 'online', label: '线上交易' },
              { value: 'offline', label: '线下交易' },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormSelect
            width="md"
            valueEnum={{
              荔园: '荔园',
              一号门: '一号门',
              欣园: '欣园',
              湖畔: '湖畔',
            }}
            name="place"
            label="交易地点"
            rules={[{ required: true }]}
          />
        </Col>
        <Col span={12}>
          <ProFormText name="comment" label="备注信息" width="md" />
        </Col>
      </Row>

      <ProFormDatePicker
        name="tradeTime"
        width="md"
        label="交易时间"
        rules={[{ required: true }]}
      />
    </ModalForm>
  );
};
export default CreateForm;
