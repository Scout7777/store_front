import React from 'react';
import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  // ProFormRadio,
  // ProFormCheckbox
  // ProFormFieldSet,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  return (
    <ModalForm
      title="核对"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={props.onSubmit}
    >
      <Row>
        <Col span={12}></Col>
      </Row>
    </ModalForm>
  );
};
export default CreateForm;
