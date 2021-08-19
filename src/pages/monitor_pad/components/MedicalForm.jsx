import React, { useEffect, useRef } from 'react';
import { Row, Col, Card } from 'antd';
import {
  ProFormText,
  ModalForm,
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
  const formRef = useRef();

  useEffect(() => {
    formRef?.current?.setFieldsValue(props.lastValue);
  }, [props.lastValue]);

  return (
    <ModalForm
      onFinish={props.onSubmit}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
      }}
      formRef={formRef}
    >
      <ProFormDigit name="netWeight" label="干体重（kg）"></ProFormDigit>
      <Row>
        <Col span={4}>
          <Card>
            <ProFormSwitch name="hdActive" label="HD" initialValue={false} />
            <ProFormDigit name={['hd', 'time']} label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name={['hd', 'bloodFlow']} label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['hd', 'conductivity']} label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit
              name={['hd', 'dialyzesTemperature']}
              label="透析液温度（℃）"
            ></ProFormDigit>
            <ProFormDigit name={['hd', 'dialyzesFlow']} label="透析液流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['hd', 'bicarbonate']} label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hd', 'dialyzesNa']} label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hd', 'dialyzesK']} label="透析液钾"></ProFormDigit>
            <ProFormDigit name={['hd', 'dialyzesCa']} label="透析液钙"></ProFormDigit>
            <ProFormText name={['hd', 'anticoagulant']} label="抗凝剂"></ProFormText>
            <ProFormDigit
              name={['hd', 'anticoagulantAxaIU']}
              label="抗凝剂剂量（AxaIU）"
            ></ProFormDigit>
            <ProFormDigit name={['hd', 'initialAxaIU']} label="初始量"></ProFormDigit>
            <ProFormDigit name={['hd', 'preserveAxaIU']} label="维持量"></ProFormDigit>
            <ProFormDigit name={['hd', 'replaceQuantity']} label="置换液量（L）"></ProFormDigit>
            <ProFormText name={['hd', 'replaceMethod']} label="置换模式"></ProFormText>
          </Card>
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
          <Card>
            <ProFormSwitch name="hfActive" label="HF" initialValue={false} />
            <ProFormDigit name={['hf', 'time']} label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name={['hf', 'bloodFlow']} label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['hf', 'conductivity']} label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit
              name={['hf', 'dialyzesTemperature']}
              label="透析液温度（℃）"
            ></ProFormDigit>
            <ProFormDigit name={['hf', 'dialyzesFlow']} label="透析液流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['hf', 'bicarbonate']} label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hf', 'dialyzesNa']} label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hf', 'dialyzesK']} label="透析液钾"></ProFormDigit>
            <ProFormDigit name={['hf', 'dialyzesCa']} label="透析液钙"></ProFormDigit>
            <ProFormText name={['hf', 'anticoagulant']} label="抗凝剂"></ProFormText>
            <ProFormDigit
              name={['hf', 'anticoagulantAxaIU']}
              label="抗凝剂剂量（AxaIU）"
            ></ProFormDigit>
            <ProFormDigit name={['hf', 'initialAxaIU']} label="初始量"></ProFormDigit>
            <ProFormDigit name={['hf', 'preserveAxaIU']} label="维持量"></ProFormDigit>
            <ProFormDigit name={['hf', 'replaceQuantity']} label="置换液量（L）"></ProFormDigit>
            <ProFormText name={['hf', 'replaceMethod']} label="置换模式"></ProFormText>
          </Card>
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
          <Card>
            <ProFormSwitch name="hdfActive" label="HDF" initialValue={false} />
            <ProFormDigit name={['hdf', 'time']} label="透析时长（小时）"></ProFormDigit>
            <ProFormDigit name={['hdf', 'bloodFlow']} label="血流量（ml/min）"></ProFormDigit>
            <ProFormDigit name={['hdf', 'conductivity']} label="电导度（mS/cm）"></ProFormDigit>
            <ProFormDigit
              name={['hdf', 'dialyzesTemperature']}
              label="透析液温度（℃）"
            ></ProFormDigit>
            <ProFormDigit
              name={['hdf', 'dialyzesFlow']}
              label="透析液流量（ml/min）"
            ></ProFormDigit>
            <ProFormDigit name={['hdf', 'bicarbonate']} label="碳酸氢根（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hdf', 'dialyzesNa']} label="透析液钠（mmol/l）"></ProFormDigit>
            <ProFormDigit name={['hdf', 'dialyzesK']} label="透析液钾"></ProFormDigit>
            <ProFormDigit name={['hdf', 'dialyzesCa']} label="透析液钙"></ProFormDigit>
            <ProFormText name={['hdf', 'anticoagulant']} label="抗凝剂"></ProFormText>
            <ProFormDigit
              name={['hdf', 'anticoagulantAxaIU']}
              label="抗凝剂剂量（AxaIU）"
            ></ProFormDigit>
            <ProFormDigit name={['hdf', 'initialAxaIU']} label="初始量"></ProFormDigit>
            <ProFormDigit name={['hdf', 'preserveAxaIU']} label="维持量"></ProFormDigit>
            <ProFormDigit name={['hdf', 'replaceQuantity']} label="置换液量（L）"></ProFormDigit>
            <ProFormText name={['hdf', 'replaceMethod']} label="置换模式"></ProFormText>
          </Card>
        </Col>
        <Col span={1}></Col>
        <Col span={4}>
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
        <Col span={1}></Col>
        <Col span={4}>
          <Card>
            <ProFormSwitch name="sufActive" label="IUF" initialValue={false} />
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
    </ModalForm>
  );
};
export default LongCreateForm;
