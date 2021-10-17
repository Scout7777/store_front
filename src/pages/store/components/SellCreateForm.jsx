import React from 'react';
import { Row, Col } from 'antd';
import { ProFormSelect, ProFormText, ModalForm } from '@ant-design/pro-form';

// const SelectIdCardType = (
//   <Select defaultValue=".com" className="select-after">
//     <Option value=".com">.com</Option>
//     <Option value=".jp">.jp</Option>
//     <Option value=".cn">.cn</Option>
//     <Option value=".org">.org</Option>
//   </Select>
// );
const UpdateForm = (props) => {
  return (
    <ModalForm
      title="上架商品"
      width={900}
      bodyStyle={{ padding: '32px 40px 48px' }}
      visible={props.visible}
      modalProps={{
        onCancel: props.onCancel,
        destroyOnClose: true,
        bodyStyle: { padding: '32px 0 36px 68px' },
      }}
      onFinish={props.onSubmit}
    >
      <Row>
        <Col span={12}>
          <ProFormText name="name" label="商品名称" width="md" rules={[{ required: true }]} />
        </Col>
        <Col span={12}>
          <ProFormText name="price" label="商品价格" width="md" rules={[{ required: true }]} />
        </Col>
        <Col span={12}>
          <ProFormText name="comment" label="备注" width="md" rules={[{ required: true }]} />
        </Col>
        <Col span={12}>
          <ProFormText name="comment" label="备注" width="md" />
        </Col>

        <Col span={12}>
          <ProFormSelect
            width="md"
            valueEnum={{
              日用品: '日用品',
              电器: '电器',
              食品: '食品',
              床上用品: '床上用品',
            }}
            name="type"
            label="商品类型"
            rules={[{ required: true }]}
          />
        </Col>
      </Row>
    </ModalForm>
  );
};
export default UpdateForm;
