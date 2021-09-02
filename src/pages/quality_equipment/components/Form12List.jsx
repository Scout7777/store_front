import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '22px' }}
      labelStyle={{ fontSize: '22px', width: '22%' }}
      column={2}
    >
      <Descriptions.Item label="2班透析治疗的例次">76469</Descriptions.Item>
      <Descriptions.Item label="2班预期给定床位数">42893</Descriptions.Item>
      <Descriptions.Item label="3班透析治疗的例次">76469</Descriptions.Item>
      <Descriptions.Item label="3班预期给定床位数">42893</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;
