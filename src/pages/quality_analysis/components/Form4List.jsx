import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      column={10}
      layout={'vertical'}
    >
      <Descriptions.Item label="ID">30</Descriptions.Item>
      <Descriptions.Item label="类型">30</Descriptions.Item>
      <Descriptions.Item label="方向">30</Descriptions.Item>
      <Descriptions.Item label="部位">30</Descriptions.Item>
      <Descriptions.Item label="手术吻合">30</Descriptions.Item>
      <Descriptions.Item label="是否启用">30</Descriptions.Item>
      <Descriptions.Item label="启用时间">30</Descriptions.Item>
      <Descriptions.Item label="是否弃用">30</Descriptions.Item>
      <Descriptions.Item label="弃用原因">30</Descriptions.Item>
      <Descriptions.Item label="通畅时长">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;
