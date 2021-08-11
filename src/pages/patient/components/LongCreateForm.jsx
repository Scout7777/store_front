import React from 'react';
import { Row, Col, Card } from 'antd';
import ProForm, {
  ProFormSelect,
  ProFormText,
  // ProFormRadio,
  // ProFormDatePicker,
  ProFormDigit,
  ProFormSwitch,
} from '@ant-design/pro-form';
// import { useState } from 'react';
// import { PropertySafetyFilled } from '@ant-design/icons';

// import FormItemDivider from '@/components/FormItemDivider';

/* 功能键：从HIS获取患者信息
患者基本信息：
必填：患者唯一编码、住院号、门诊号（登记号）、医保号、透析号、证件类型、证件号码、患者姓名、性别、出生日期（最好可以填完身份证号自动生成）、慢性肾衰竭标志（是、否）医疗支付方式、是否本地医保、首次透析日期、本院首次透析日期、
选填：身高、密级、重名附加符、血型、教育程度、职业、婚姻状况、生育情况、本人电话、家庭电话、联系人电话、联系人关系、家庭住址
上传头像，更新患者LIS信息，时间段 */
const LongCreateForm = (props) => {
  console.log(props.lastValue);
  return (
    <ProForm onFinish={props.onSubmit}>
      <ProFormDigit name="netWeight" label="干体重（kg）"></ProFormDigit>
      <Row>
        <Col span={8}>
          <Card>
            <ProFormSelect
              // initialValue={props.lastValue.Type ? props.lastValue.Type : 'none'}
              valueEnum={{
                none: '无',
                hd: 'HD',
                hf: 'HF',
                hdf: 'HDF',
              }}
              name="Type"
              label="HD/HF/HDF类型"
            />
            <ProFormDigit name={['main', 'time']} label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name={['main', 'bloodFlow']} label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['main', 'conductivity']} label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit
              name={['main', 'dialyzesTemperature']}
              label="透析液温度（℃）"
            ></ProFormDigit>
            <ProFormDigit
              name={['main', 'dialyzesFlow']}
              label="透析液流量（ml/min）"
            ></ProFormDigit>
            <ProFormDigit name={['main', 'bicarbonate']} label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['main', 'dialyzesNa']} label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['main', 'dialyzesK']} label="透析液钾"></ProFormDigit>
            <ProFormDigit name={['main', 'dialyzesCa']} label="透析液钙"></ProFormDigit>
            <ProFormText name={['main', 'anticoagulant']} label="抗凝剂"></ProFormText>
            <ProFormDigit
              name={['main', 'anticoagulantAxaIU']}
              label="抗凝剂剂量（AxaIU）"
            ></ProFormDigit>
            <ProFormDigit name={['main', 'initialAxaIU']} label="初始量"></ProFormDigit>
            <ProFormDigit name={['main', 'preserveAxaIU']} label="维持量"></ProFormDigit>
            <ProFormDigit name={['main', 'replaceQuantity']} label="置换液量（L）"></ProFormDigit>
            <ProFormText name={['main', 'replaceMethod']} label="置换模式"></ProFormText>
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <ProFormSwitch name="hpActive" label="HP" initialValue={false} />
            <ProFormDigit name={['hp', 'time']} label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name={['hp', 'bloodFlow']} label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['hp', 'conductivity']} label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit
              name={['hp', 'dialyzesTemperature']}
              label="透析液温度（℃）"
            ></ProFormDigit>
            <ProFormDigit name={['hp', 'dialyzesFlow']} label="透析液流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['hp', 'bicarbonate']} label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hp', 'dialyzesNa']} label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hp', 'dialyzesK']} label="透析液钾"></ProFormDigit>
            <ProFormDigit name={['hp', 'dialyzesCa']} label="透析液钙"></ProFormDigit>
            <ProFormText name={['hp', 'anticoagulant']} label="抗凝剂"></ProFormText>
            <ProFormDigit
              name={['hp', 'anticoagulantAxaIU']}
              label="抗凝剂剂量（AxaIU）"
            ></ProFormDigit>
            <ProFormDigit name={['hp', 'initialAxaIU']} label="初始量"></ProFormDigit>
            <ProFormDigit name={['hp', 'preserveAxaIU']} label="维持量"></ProFormDigit>
            {/* <ProFormDigit name={['hp', 'bloodFlow']} label="置换液量（L）"></ProFormDigit>
            <ProFormText name={['hp', 'bloodFlow']} label="置换模式"></ProFormText> */}
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <ProFormSwitch name="sufActive" label="SUF" initialValue={false} />
            <ProFormDigit name={['suf', 'time']} label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name={['suf', 'bloodFlow']} label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['suf', 'conductivity']} label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit
              name={['suf', 'dialyzesTemperature']}
              label="透析液温度（℃）"
            ></ProFormDigit>
            <ProFormDigit
              name={['suf', 'dialyzesFlow']}
              label="透析液流量（ml/min）"
            ></ProFormDigit>
            <ProFormDigit name={['suf', 'bicarbonate']} label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['suf', 'dialyzesNa']} label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['suf', 'dialyzesK']} label="透析液钾"></ProFormDigit>
            <ProFormDigit name={['suf', 'dialyzesCa']} label="透析液钙"></ProFormDigit>
            <ProFormText name={['suf', 'anticoagulant']} label="抗凝剂"></ProFormText>
            <ProFormDigit
              name={['suf', 'anticoagulantAxaIU']}
              label="抗凝剂剂量（AxaIU）"
            ></ProFormDigit>
            <ProFormDigit name={['suf', 'initialAxaIU']} label="初始量"></ProFormDigit>
            <ProFormDigit name={['suf', 'preserveAxaIU']} label="维持量"></ProFormDigit>
          </Card>
        </Col>
      </Row>
    </ProForm>
  );
};
export default LongCreateForm;
