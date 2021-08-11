import React from 'react';
import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ModalForm,
  ProFormRadio,
  ProFormCheckbox,
  // ProFormFieldSet,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

const CreateForm = (props) => {
  return (
    <ModalForm
      title="接诊"
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
          <ProFormRadio.Group
            name="walkMethod"
            label="入室方式"
            radioType="button"
            initialValue="步行"
            options={[
              {
                label: '步行',
                value: '步行',
              },
              {
                label: '扶行',
                value: '扶行',
              },
              {
                label: '轮椅',
                value: '轮椅',
              },
              {
                label: '平车',
                value: '平车',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="patientState"
            label="状态"
            radioType="button"
            initialValue="清醒"
            options={[
              {
                label: '清醒',
                value: '清醒',
              },
              {
                label: '嗜睡',
                value: '嗜睡',
              },
              {
                label: '昏迷',
                value: '昏迷',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="eatState"
            label="食欲"
            radioType="button"
            initialValue="正常"
            options={[
              {
                label: '正常',
                value: '正常',
              },
              {
                label: '减退',
                value: '减退',
              },
              {
                label: '恶心',
                value: '恶心',
              },
              {
                label: '呕吐',
                value: '呕吐',
              },
              {
                label: '腹泻',
                value: '腹泻',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormCheckbox.Group
            name="patientStatus"
            label="患者情况"
            options={['住院', '围手术期']}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="canProcess"
            label="是否可以透析"
            initialValue={true}
            options={[
              {
                value: true,
                label: '是',
              },
              {
                value: false,
                label: '否',
              },
            ]}
          />
        </Col>
        <Col></Col>
      </Row>
    </ModalForm>
  );
};
export default CreateForm;
