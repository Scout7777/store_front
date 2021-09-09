import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      layout={'vertical'}
      column={10}
    >
      <Descriptions.Item label="同期血液透析模式总例次" span={50}>
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
