import React from 'react';
import { Row, Col } from 'antd';
import {
  // ProFormSelect,
  // ProFormText,
  ProFormDigit,
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
          <ProFormDigit name="realWeight" label="透前体重（kg）"></ProFormDigit>
        </Col>
        <Col span={12}>
          <ProFormDigit name="netWeight" label="干体重（kg）"></ProFormDigit>
        </Col>
        <Col span={12}>
          <ProFormDigit name="systolicBloodPressure" label="收缩压"></ProFormDigit>
        </Col>
        <Col span={12}>
          <ProFormDigit name="diastolicBloodPressure" label="舒张压"></ProFormDigit>
        </Col>
        <Col span={12}>
          <ProFormDigit name="heartRate" label="心率"></ProFormDigit>
        </Col>
        <Col span={12}>
          <ProFormDigit name="temperature" label="体温（摄氏度）"></ProFormDigit>
        </Col>
        <Col span={12}>
          <ProFormDigit name="breathCount" label="呼吸次数（次/分）"></ProFormDigit>
        </Col>
        <Col span={24}>
          <ProFormRadio.Group
            name="vascularAccess"
            label="血管通路"
            radioType="button"
            initialValue="动静脉自体内瘘"
            options={[
              {
                label: '动静脉自体内瘘',
                value: '动静脉自体内瘘',
              },
              {
                label: '动静脉人工内瘘',
                value: '动静脉人工内瘘',
              },
              {
                label: '中心静脉长期导管',
                value: '中心静脉临时导管',
              },
              {
                label: '未开瘘',
                value: '未开瘘',
              },
              {
                label: '其他',
                value: '其他',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="throbbing"
            label="搏动颤音"
            radioType="button"
            options={[
              {
                label: '无',
                value: '无',
              },
              {
                label: '存在',
                value: '存在',
              },
              {
                label: '减弱',
                value: '减弱',
              },
              {
                label: '消失',
                value: '消失',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="fallingRisk"
            label="跌倒风险"
            radioType="button"
            initialValue="无"
            options={[
              {
                label: '无',
                value: '无',
              },
              {
                label: '有',
                value: '有',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="riskAssessment"
            label="风险评估"
            radioType="button"
            initialValue="低"
            options={[
              {
                label: '低',
                value: '低',
              },
              {
                label: '中',
                value: '中',
              },
              {
                label: '高',
                value: '高',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormRadio.Group
            name="catheterAccess"
            label="导管通路"
            radioType="button"
            initialValue="无"
            options={[
              {
                label: '无',
                value: '无',
              },
              {
                label: '有',
                value: '有',
              },
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormCheckbox.Group
            name="accessSkin"
            label="通路皮肤"
            options={[
              '正常',
              '红肿',
              '化脓',
              '过敏',
              '局部发热',
              '疼痛',
              '硬结',
              '菲薄',
              '溃疡',
              '凹陷',
              '其他',
            ]}
          />
        </Col>
        <Col span={12}>
          <ProFormCheckbox.Group
            name="interDialysisMedication"
            label="透析间期用药"
            options={['A', 'B', 'C']}
          />
        </Col>
        <Col span={12}>
          <ProFormCheckbox.Group
            name="preventFallMethod"
            label="预防跌倒措施"
            options={['镇静剂', '约束带', '床栏', '宣教', '助行器']}
          />
        </Col>
        <Col></Col>
      </Row>
    </ModalForm>
  );
};
export default CreateForm;
