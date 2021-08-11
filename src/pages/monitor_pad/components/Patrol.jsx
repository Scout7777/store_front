import React from 'react';
import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  ProFormDateTimePicker,
  // ProFormRadio,
  // ProFormCheckbox
  // ProFormFieldSet,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  return (
    <ModalForm
      title="巡视"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={props.onSubmit}
    >
      <Row>
        <Col span={12}>
          <ProFormDateTimePicker name="createdAt" label="巡视" />
        </Col>
      </Row>
    </ModalForm>
  );
};
export default CreateForm;
