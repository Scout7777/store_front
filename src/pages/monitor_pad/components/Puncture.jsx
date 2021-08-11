import React from 'react';
// import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  // ProFormRadio,
  // ProFormCheckbox
  // ProFormFieldSet,
} from '@ant-design/pro-form';
import Sign from './Signature';

// import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  return (
    <ModalForm
      title="穿刺/换药"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={props.onSubmit}
    >
      <div>
        <Sign />
      </div>
    </ModalForm>
  );
};
export default CreateForm;
