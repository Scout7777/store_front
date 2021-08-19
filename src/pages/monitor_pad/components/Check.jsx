import React from 'react';
import { useModel } from 'umi';
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
import { updateCheck } from '@/services/histsys/dialysis';
import FormItemDivider from '@/components/FormItemDivider';
// import { useRef } from 'react';
import { useState } from 'react';

const CreateForm = (props) => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const processid = props.processid || 6;
  const [signUrl, serUrl] = useState('');

  function handleGetMsg(value) {
    serUrl(value);
  }

  async function handleSubmit() {
    const data = {
      user: { id: currentUser.id },
      signFile: { url: signUrl },
    };
    await updateCheck(processid, data).then((resp) => {
      console.log(resp);
      props.onSubmit();
    });
  }

  return (
    <ModalForm
      title="核对"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={handleSubmit}
    >
      <FormItemDivider>核对签名签名</FormItemDivider>
      <div>
        <Sign getUrl={handleGetMsg} />
      </div>
    </ModalForm>
  );
};
export default CreateForm;
