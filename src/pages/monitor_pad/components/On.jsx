import React from 'react';
import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  ProFormRadio,
  ProFormDigit,
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
      title="上机"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={handleSubmit}
    >
      <Row>
        <Col>
          <ProFormRadio.Group
            name="heparinName"
            label="抗凝剂种类"
            radioType="button"
            options={[
              {
                label: '无',
                value: '无',
              },
              {
                label: '普通肝素',
                value: '普通肝素',
              },
              {
                label: '低分子肝素',
                value: '低分子肝素',
              },
              {
                label: '枸橼酸钠',
                value: '枸橼酸钠',
              },
              {
                label: '阿加曲班',
                value: '阿加曲班',
              },
            ]}
          />
        </Col>
        <Col>
          <ProFormDigit name="heparinAmount" label="剂量（AxaIU）"></ProFormDigit>
        </Col>
      </Row>
      <FormItemDivider>上机操作签名</FormItemDivider>
      <div>
        <Sign getUrl={handleGetMsg} />
      </div>
    </ModalForm>
  );
};
export default CreateForm;
