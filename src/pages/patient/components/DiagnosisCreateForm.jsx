import React from 'react';
// import { Row, Col } from 'antd';
import ProForm, {
  // ProFormSelect,
  // ProFormText,
  // ProFormRadio,
  // ProFormDatePicker,
  ProFormTextArea,
  // ProFormFieldSet,
  ProFormCheckbox,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

/* 功能键：从HIS获取患者信息
患者基本信息：
必填：患者唯一编码、住院号、门诊号（登记号）、医保号、透析号、证件类型、证件号码、患者姓名、性别、出生日期（最好可以填完身份证号自动生成）、慢性肾衰竭标志（是、否）医疗支付方式、是否本地医保、首次透析日期、本院首次透析日期、
选填：身高、密级、重名附加符、血型、教育程度、职业、婚姻状况、生育情况、本人电话、家庭电话、联系人电话、联系人关系、家庭住址
上传头像，更新患者LIS信息，时间段 */
const DiagnosisCreateForm = (props) => {
  return (
    <ProForm onFinish={props.onSubmit}>
      <ProFormTextArea
        name="mainDiagnosis"
        label="主要诊断"
        // fieldProps={inputTextAreaProps}
      />
      <ProFormTextArea
        name="medicalHistory"
        label="病史"
        // fieldProps={inputTextAreaProps}
      />
      <ProFormTextArea
        name="pastHistory"
        label="既往史"
        // fieldProps={inputTextAreaProps}
      />
      <ProFormCheckbox.Group
        name="diagnosisInfoItemList"
        layout="horizonal"
        label="原发病"
        options={[
          '病理诊断',
          '继发性肾小球疾病',
          'HIV 相关性肾损害',
          '丙型肝炎病毒相关性肾炎',
          '淀粉样变性',
          '多发骨髓瘤肾病',
          '肥胖相关性肾病',
          '干燥综合征肾损害',
          '高血压肾硬化',
        ]}
        // 病理诊断 1001 继发性肾小球疾病 100101 HIV 相关性肾损害 100102 丙型肝炎病毒相关性肾炎 100103 淀粉样变性 100104 多发骨髓瘤肾病 100105 肥胖相关性肾病 100106 干燥综合征肾损害 100107 高血压肾硬化
      />
    </ProForm>
  );
};
export default DiagnosisCreateForm;
