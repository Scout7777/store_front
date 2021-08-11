import React from 'react';
import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  // ProFormRadio,
  ProFormCheckbox,
  // ProFormFieldSet,
  ProFormDateTimePicker,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  return (
    <ModalForm
      title="监测"
      width={900}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      onFinish={props.onSubmit}
    >
      <Row>
        <Col span={24}>
          <ProFormCheckbox.Group
            style={{ fontSize: 25 }}
            name="patientStatus"
            label="并发症"
            options={[
              '症状低血压',
              '高血压',
              '肌肉痉挛',
              '低血压',
              '心率过缓',
              '心动过速',
              '心悸',
              '心律失常',
              '胸闷',
              '头晕',
              '头痛',
              '出汗',
              '恶心',
              '呕吐',
              '内瘘感染',
              '呼吸困难',
              '内瘘闭塞',
              '内瘘狭窄',
              '导管感染',
              '胃出血',
              '意识丧失',
              '糖尿病',
              '心肌梗死',
              '出血',
              '心衰',
              '内瘘术后',
              '冠心病',
              '测血糖',
              '房颤',
              '血压、脉搏测量不出',
              '低血糖',
              '支架后',
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormDateTimePicker name="createdAt" label="监测时间" />
        </Col>
      </Row>
    </ModalForm>
  );
};
export default CreateForm;
