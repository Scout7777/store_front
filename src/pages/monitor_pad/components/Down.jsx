import React from 'react';
// import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  // ProFormRadio,
  // ProFormDigit,
  // ProFormCheckbox
  // ProFormFieldSet,
} from '@ant-design/pro-form';
import Sign from './Signature';

import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  async function handleSubmit() {
    console.log('执行');
    props.onSubmit();
  }

  function handleGetMsg(value) {
    console.log(value);
  }

  return (
    <ModalForm
      title="下机"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={handleSubmit}
    >
      <FormItemDivider>下机操作签名</FormItemDivider>
      <div>
        <Sign getUrl={handleGetMsg} />
      </div>
    </ModalForm>
  );
};
export default CreateForm;
