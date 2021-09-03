import { Descriptions } from 'antd';

const Form1List = () => {
  return (
    <Descriptions
      bordered
      contentStyle={{ fontSize: '16px' }}
      labelStyle={{ fontSize: '16px' }}
      column={11}
      layout={'vertical'}
    >
      <Descriptions.Item label="通路ID">30</Descriptions.Item>
      <Descriptions.Item label="并发症名称">30</Descriptions.Item>
      <Descriptions.Item label="发现时间">30</Descriptions.Item>
      <Descriptions.Item label="并发症">30</Descriptions.Item>
      <Descriptions.Item label="处理时间">30</Descriptions.Item>
      <Descriptions.Item label="溶栓时间">30</Descriptions.Item>
      <Descriptions.Item label="溶栓次数">30</Descriptions.Item>
      <Descriptions.Item label="PAT时间">30</Descriptions.Item>
      <Descriptions.Item label="PAT压力">30</Descriptions.Item>
      <Descriptions.Item label="PAT次数">30</Descriptions.Item>
      <Descriptions.Item label="失功原因">30</Descriptions.Item>
    </Descriptions>
  );
};

export default Form1List;
