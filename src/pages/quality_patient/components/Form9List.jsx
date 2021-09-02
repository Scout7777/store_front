import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="同期血液透析模式总例次" span={4}>
        76469
      </Descriptions.Item>
      <Descriptions.Item label="HD">42893</Descriptions.Item>
      <Descriptions.Item label="HDF">21123</Descriptions.Item>
      <Descriptions.Item label="HFD">7193</Descriptions.Item>
      <Descriptions.Item label="HP">5360</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;
