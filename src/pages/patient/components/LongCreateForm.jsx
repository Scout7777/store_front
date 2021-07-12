import React from 'react';
import { Row, Col, Card } from 'antd';
import ProForm, {
  ProFormSelect,
  // ProFormText,
  // ProFormRadio,
  // ProFormDatePicker,
  // ProFormFieldSet,
  ProFormSwitch,
} from '@ant-design/pro-form';

// import FormItemDivider from '@/components/FormItemDivider';

/* 功能键：从HIS获取患者信息
患者基本信息：
必填：患者唯一编码、住院号、门诊号（登记号）、医保号、透析号、证件类型、证件号码、患者姓名、性别、出生日期（最好可以填完身份证号自动生成）、慢性肾衰竭标志（是、否）医疗支付方式、是否本地医保、首次透析日期、本院首次透析日期、
选填：身高、密级、重名附加符、血型、教育程度、职业、婚姻状况、生育情况、本人电话、家庭电话、联系人电话、联系人关系、家庭住址
上传头像，更新患者LIS信息，时间段 */
const BasicCreateForm = (props) => {
  console.log(props);
  return (
    <ProForm>
      <Row>
        <Col span={8}>
          <Card>
            <ProFormSelect
              valueEnum={{
                none: '无',
                HD: 'HD',
                HF: 'HF',
                HDF: 'HDF',
              }}
              name="Type"
              label="类型"
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <ProFormSwitch name="switch1" label="HP" />
          </Card>
        </Col>
        <Col span={8}>
          <Card>
            <ProFormSwitch name="switch2" label="SUF" />
          </Card>
        </Col>
      </Row>
    </ProForm>
  );
};
export default BasicCreateForm;
