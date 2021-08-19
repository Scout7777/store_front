import React from 'react';
import { useModel } from 'umi';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  // ProFormRadio,
  // ProFormCheckbox
  // ProFormFieldSet,
} from '@ant-design/pro-form';
import Sign from './Signature';
import { updatePun } from '@/services/histsys/dialysis';
import FormItemDivider from '@/components/FormItemDivider';
import { useRef } from 'react';
import { useState } from 'react';

const CreateForm = (props) => {
  const { initialState } = useModel('@@initialState');
  const { currentUser } = initialState || {};
  const processid = props.processid || 6;
  const [signUrl, serUrl] = useState('');
  const formRef = useRef();

  function handleGetMsg(value) {
    serUrl(value);
  }

  async function handleSubmit() {
    const data = {
      nurse: { id: currentUser.id },
      nurseSign: { url: signUrl },
    };
    await updatePun(processid, data).then((resp) => {
      console.log(resp);
      props.onSubmit();
    });
  }

  return (
    <ModalForm
      formRef={formRef}
      title="穿刺/换药"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={handleSubmit}
    >
      <FormItemDivider>穿刺/换药签名</FormItemDivider>
      <div>
        <Sign getUrl={handleGetMsg} />
      </div>
    </ModalForm>
  );
};
export default CreateForm;
